const express = require("express");
const {
    getUserData,
    handleApplication,
    getUserDataById,
    loginUser,
    signUpUser,
    forgotUserEmail,
    visitor,
    interviewer
} = require("../../controller/user/index.js");
const { handleUpload } = require("../../middleware/uploadMiddleware.js");

const router = express.Router();

router.get("/", getUserData);
router.get("/profile/:id", getUserDataById);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.post('/forgotUser', forgotUserEmail);
router.post("/visitor", visitor);
router.post("/interviewer", interviewer);
router.post("/apply", handleUpload, handleApplication);

module.exports = router;