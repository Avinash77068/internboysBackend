const User = require("../../model/user/index.js");
const generateToken = require('../../middleware/token.js')
const sendEmail = require("../../middleware/email/sendEmail.js");
const { emailTemplatesForInterview } = require("../../middleware/email/templates.js");
const Visitor = require("../../model/visitor/index.js");

const getUserData = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserDataById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
       return res.status(400).json({ message: 'Email and password are required' });
   }
   const user = await User.findOne({ email });
   if (!user) {
       return res.status(400).json({ message: 'User not found' });
   }
   if (user.password !== password.toString()) {
       return res.status(400).json({ message: 'Invalid password' });
   }
   else {
       const token = generateToken(user);
       user.token = token;
       await user.save();
       const safeUser = user.toObject();
       delete safeUser.password;        


       res.json({ message: 'Login successful', user: safeUser });
   }
};

const signUpUser= async (req,res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email and password are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        if (!email.includes('@')) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
    res.status(500).json({ message: error.message });
    }
}

const forgotUserEmail = async (req, res) => {
    const { email ,phoneNumber } = req.body;
    try {
        if (email) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            const template = emailTemplatesForInterview.forgotPassword(otp);
            const sendEmailResult = await sendEmail(email , template);

            res.json({ message: sendEmailResult });
        } else if (phoneNumber) {
            res.json({ message: 'Password reset link sent to your phone number' });
        } else {
            res.status(400).json({ message: 'Email or phone number is required' });
        }
    } catch (error) {
        console.error('Error sending reset email:', error);
        res.status(500).json({ message: 'Error sending reset email', error: error.message });
    }
};


const visitor = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        // Check if visitor exists
        let visitor = await Visitor.findOne({ email });

        // Get the email template
        const template = emailTemplatesForInterview.visitor(email);

        if (!visitor) {
            // Create new visitor
            visitor = new Visitor({
                email,
                attemptCount: 1,
                lastAttempt: new Date()
            });
            await visitor.save();

            // Send welcome email
            await sendEmail(email, template);

            return res.status(201).json({
                success: true,
                message: "Visitor created successfully (1/3 attempts)",
                attempts: 1,
                statusCode: 201
            });
        }

        // Check if visitor has exceeded attempt limit
        if (visitor.attemptCount >= 3) {
            return res.status(429).json({
                success: false,
                message: "Maximum attempts reached. Try again later.",
                attempts: visitor.attemptCount,
                statusCode: 429
            });
        }

        // Increment attempt count and update last attempt time
        visitor.attemptCount += 1;
        visitor.lastAttempt = new Date();
        await visitor.save();

        // Send email
        await sendEmail(email, template);

        return res.status(200).json({
            success: true,
            message: `Email sent successfully (${visitor.attemptCount}/3 attempts)`,
            attempts: visitor.attemptCount,
            statusCode: 200
        });

    } catch (error) {
        console.error("Visitor Error:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while processing your request",
            error: error.message,
            statusCode: 500,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

const interviewer = async(req,res) => {
    try {
        const { email } = req.body;
        const userOne = await User.findOne({ email });
        const meetingDate = new Date().toISOString().split('T')[0];
        const template = emailTemplatesForInterview.interviewer(email,meetingDate,userOne.name);
        const sendEmailResult = await sendEmail(email , template);
        res.json({ message: sendEmailResult });
        
    } catch (error) {
        console.error('Error sending reset email:', error);
        res.status(500).json({ message: 'Error sending reset email', error: error.message });
    }
}

const handleApplication = async (req, res) => {
    try {
        const { fullName, email, phone, college, major, year, experience, motivation, skills } = req.body;
        // Uploaded file info
        const resume = req.file ? req.file.filename : null;

        // Handle skills - accept both string and array
        let parsedSkills = [];
        if (skills) {
            if (Array.isArray(skills)) {
                parsedSkills = skills;
            } else if (typeof skills === 'string') {
                try {
                    parsedSkills = JSON.parse(skills);
                    if (!Array.isArray(parsedSkills)) {
                        parsedSkills = skills.split(',').map(s => s.trim());
                    }
                } catch (e) {
                    parsedSkills = skills.split(',').map(s => s.trim());
                }
            }
        }

        const newApplication = {
            fullName,
            email,
            phone,
            college,
            major,
            year,
            experience,
            motivation,
            skills: parsedSkills,
            resume,
            submittedAt: new Date(),
        };

        // Get the email template
        const template = emailTemplatesForInterview.application(newApplication);

        // Send email
        try {
            await sendEmail(email, template);


            await User.create(newApplication);

            res.json({
                success: true,
                message: "Application submitted successfully",
                data: newApplication
            });
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Still return success but notify about email failure
            res.status(200).json({
                success: true,
                message: "Application submitted, but confirmation email could not be sent",
                data: newApplication
            });
        }
    } catch (err) {
        console.error('Application submission error:', err);
        res.status(500).json({
            success: false,
            message: "Server error while processing your application",
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
};




module.exports = { getUserData, getUserDataById, loginUser, signUpUser, forgotUserEmail, visitor ,interviewer, handleApplication };