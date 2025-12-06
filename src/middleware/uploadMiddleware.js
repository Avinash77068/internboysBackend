import multer from "multer";
import path from "path";
import fs from "fs";

// Configure storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "./uploads/resumes";
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
        cb(null, `${Date.now()}-${baseName}${ext}`);
    },
});

// Create multer upload middleware
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) return cb(null, true);
        cb(new Error("Only .pdf, .doc, and .docx files are allowed"));
    },
});

export const handleUpload = upload.single("resume");
