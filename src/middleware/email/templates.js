// backend/utils/email/templates.js

 const emailTemplatesForInterview = {
  // -----------------------------
  // Future: Meeting Request Email
  // -----------------------------
  meetingRequest: (fullName, email) => ({
    subject: "Internboys.online | Internship Confirmation Required",

    html: `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </head>
    <body style="margin:0;padding:0;background-color:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.08)">
        
        <!-- Header -->
        <tr>
          <td style="padding:24px;text-align:center;background:linear-gradient(90deg,#2563eb,#4f46e5);color:#ffffff;">
            <h1 style="margin:0;font-size:22px;">Internboys.online</h1>
            <p style="margin:5px 0 0;font-size:14px;">Internship Confirmation Notice</p>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:24px;">
            <p style="font-size:16px;">Hello <strong>${fullName || "Candidate"}</strong>,</p>
            
            <p>We are pleased to inform you that you have been <strong>shortlisted for an internship</strong> at <strong>Internboys.online</strong> 👏</p>

            <p>Before we schedule your interview/meeting, we need one quick confirmation from you.</p>

            <table width="100%" style="margin:18px 0;">
              <tr>
                <td style="padding:14px;background:#f8fafc;border-radius:8px;font-size:15px;">
                  <p><strong>Registered Email:</strong> ${email}</p>
                </td>
              </tr>
            </table>

            <p style="margin-top:20px;font-size:15px;">👉 <strong>Please reply to this email with:</strong></p>

            <ul style="font-size:15px;line-height:1.6">
              <li>✔ "Yes, I confirm my interest"</li>
              <li>✔ Preferred meeting time (Morning/Afternoon/Evening)</li>
              <li>✔ Your WhatsApp number (optional)</li>
            </ul>

            <p style="margin-top:20px;font-size:15px;">Once we receive your reply, we will schedule your meeting and share the Google Meet/Zoom link.</p>

            <hr style="margin:26px 0;" />

            <p>Thank you,<br/><strong>Team Internboys.online</strong></p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:14px;background:#f1f5f9;text-align:center;font-size:12px;color:#6b7280;">
            © ${new Date().getFullYear()} Internboys.online — All Rights Reserved.
          </td>
        </tr>
      </table>
    </body>
  </html>
  `,

    text: `
Hello ${fullName},

Congratulations! You have been shortlisted for an internship at Internboys.online.

Before we schedule the meeting, please reply to this email with:
- "Yes, I confirm my interest"
- Your preferred meeting time (Morning/Afternoon/Evening)
- WhatsApp number (optional)

Once we receive your reply, we will schedule the meeting and share the Google Meet/Zoom link.

Registered Email: ${email}

Thank you,
Team Internboys.online
  `
  }),
    // -----------------------------
    // FUTURE: Forgot Password Email
    // -----------------------------
    forgotPassword: (otp) => ({
        subject: "Internboys.online | Reset Your Password",

        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            .container {
                max-width: 480px;
                margin: auto;
                background: #ffffff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                font-family: Arial, sans-serif;
                color: #333;
            }
            .title {
                text-align: center;
                color: #1e88e5;
                font-size: 26px;
                margin-bottom: 10px;
            }
            .otp-box {
                font-size: 32px;
                letter-spacing: 6px;
                font-weight: bold;
                text-align: center;
                padding: 15px 0;
                background: #f4f8ff;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #dce7ff;
                color: #1e88e5;
            }
            .footer {
                text-align: center;
                margin-top: 25px;
                font-size: 13px;
                color: #777;
            }
        </style>
    </head>

    <body style="background:#f2f2f2;padding:20px;">
        <div class="container">
            <h1 class="title">Reset Your Password</h1>

            <p>Hello,</p>

            <p>You requested to reset your password. Use the OTP given below:</p>

            <div class="otp-box">${otp}</div>

            <p>This OTP is valid for the next <b>10 minutes</b>.  
            If you didn’t request this, please ignore the email.</p>

            <div class="footer">
                © Internboys.online • All Rights Reserved
            </div>
        </div>
    </body>
    </html>
    `,

        text: `
Reset Your Password

Your OTP: ${otp}

Use this OTP to reset your password. It is valid for 10 minutes.

If you didn’t request this reset, you can ignore this email.

- Internboys.online
    `
    }),
    // -----------------------------
    // Future: Visitor Email
    // -----------------------------
    visitor: (email) => ({
        subject: "Internboys.online | Thank You for Visiting Our Website",

        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            .container {
                max-width: 480px;
                margin: auto;
                background: #ffffff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                font-family: Arial, sans-serif;
                color: #333;
            }
            .title {
                text-align: center;
                color: #1e88e5;
                font-size: 26px;
                margin-bottom: 10px;
            }
            .footer {
                text-align: center;
                margin-top: 25px;
                font-size: 13px;
                color: #777;
            }
        </style>
    </head>

    <body style="background:#f2f2f2;padding:20px;">
        <div class="container">
            <h1 class="title">Thank You for Visiting Our Website</h1>

            <p>Hello,</p>

            <p>Thank you for visiting our website ${email}.  We appreciate your interest in Internboys.online. you can apply for internships and can expect a response within 24 hours.</p>

            <div class="footer">
                © Internboys.online • All Rights Reserved
            </div>
        </div>
    </body>
    </html>
    `,

        text: `
Thank You for Visiting Our Website

Thank you for visiting our website ${email}. We appreciate your interest in Internboys.online. you can apply for internships and can expect a response within 24 hours.

- Internboys.online
    `
    }),
    // -----------------------------
    // Future: Interviewer Email
    // -----------------------------
    interviewer: (teacherEmail, meetingDate, studentName) => ({
    subject: "Internboys.online | Interview Assignment",

    html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
          .container {
              max-width: 500px;
              margin: auto;
              background: #ffffff;
              padding: 25px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              font-family: Arial, sans-serif;
              color: #333;
          }
          .title {
              text-align: center;
              color: #1976d2;
              font-size: 24px;
              margin-bottom: 10px;
          }
      </style>
  </head>

  <body style="background:#f2f2f2;padding:20px;">
      <div class="container">
          <h1 class="title">Interview Assignment</h1>

          <p>Hello,</p>

          <p>
            This is to inform you that you have been assigned to conduct an 
            interview for the following candidate:
          </p>

          <table width="100%" style="margin:16px 0;">
              <tr>
                  <td style="padding:12px;background:#f1f5f9;border-radius:6px;">
                      <p><strong>Student Name:</strong> ${studentName}</p>
                      <p><strong>Interview Day:</strong> Saturday (${meetingDate})</p>
                      <p><strong>Interview Time:</strong> Will be provided on Saturday</p>
                      <p><strong>Meeting Link:</strong> Will be shared on Saturday</p>
                  </td>
              </tr>
          </table>

          <p>
            Please ensure that you are available on Saturday for conducting the interview.  
            The exact time and link will be shared with you soon.
          </p>

          <hr style="margin:20px 0;" />
          <p>Thank you,<br/><strong>Internboys.online (Management)</strong></p>
      </div>
  </body>
  </html>
  `,

    text: `
Interview Assignment

Hello,

You have been assigned to conduct an interview.

Student Name: ${studentName}
Interview Day: Saturday (${meetingDate})
Interview Time: Will be provided on Saturday
Meeting Link: Will be shared on Saturday

Please stay available on Saturday.

Thank you,
Internboys.online (Management)
  `
   }),
   application: (application) => {
     const skillsList = Array.isArray(application.skills)
       ? application.skills.map(skill => `<li>${skill}</li>`).join('')
       : `<li>${application.skills || 'Not specified'}</li>`;

     return {
       subject: `Application Received - ${application.fullName}`,
       html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Received - InternBoys</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; border: 1px solid #e9ecef;">
            <div style="text-align: center; margin-bottom: 25px;">
              <h1 style="color: #2563eb; margin: 0;">InternBoys</h1>
              <p style="color: #6b7280; margin-top: 5px;">Internship Program</p>
            </div>

            <div style="background-color: white; padding: 25px; border-radius: 6px; margin-bottom: 25px;">
              <h2 style="color: #1f2937; margin-top: 0;">Application Received!</h2>
              
              <p>Hello <strong>${application.fullName}</strong>,</p>
              
              <p>Thank you for applying to the InternBoys Internship Program. We've received your application and will review it carefully.</p>
              
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #2563eb;">Application Details</h3>
                <p><strong>Email:</strong> ${application.email}</p>
                <p><strong>Phone:</strong> ${application.phone || 'Not provided'}</p>
                <p><strong>College:</strong> ${application.college || 'Not provided'}</p>
                <p><strong>Major:</strong> ${application.major || 'Not specified'}</p>
                <p><strong>Year:</strong> ${application.year || 'Not specified'}</p>
                <p><strong>Skills:</strong></p>
                <ul style="margin-top: 5px; padding-left: 20px;">
                  ${skillsList}
                </ul>
                ${application.resume ? `<p><strong>Resume:</strong> Attached</p>` : ''}
              </div>

              <p>Our team will review your application and get back to you within 5-7 business days. If your profile matches our requirements, we'll contact you for the next steps.</p>
              
              <p>In the meantime, feel free to explore our website to learn more about our programs and offerings.</p>
            </div>

            <div style="text-align: center; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <p>This is an automated email, please do not reply to this message.</p>
              <p>&copy; ${new Date().getFullYear()} InternBoys. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
     };
   }

};

module.exports = {emailTemplatesForInterview};