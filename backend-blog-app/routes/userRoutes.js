import express from 'express';
const router = express();
import { registerUser } from "../controllers/userControllers.js";

router.post('/register', registerUser);

export default router;