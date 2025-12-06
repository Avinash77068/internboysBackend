import { Router } from "express";
import { getUserData, handleApplication, getUserDataById, loginUser, signUpUser, forgotUserEmail, visitor, interviewer } from "../../controller/user/index.js";
import { handleUpload } from "../../middleware/uploadMiddleware.js";

const router = Router();

router.get("/", getUserData);
router.get("/profile/:id", getUserDataById);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.post('/forgotUser', forgotUserEmail);
router.post("/visitor", visitor)
router.post("/interviewer", interviewer)
router.post("/apply", handleUpload, handleApplication)

export default router;