import { Router } from "express";
import { getUserData, getUserDataById, loginUser, signUpUser, forgotUserEmail, visitor } from "../../controller/user/index.js";

const router = Router();

router.get("/", getUserData);
router.get("/profile/:id", getUserDataById);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.post('/forgotUser', forgotUserEmail);
router.post("/visitor", visitor)

export default router;