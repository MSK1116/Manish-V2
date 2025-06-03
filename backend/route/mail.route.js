import express from "express";
import { sendEmail_info } from "../controller/mail_info.controller.js";
import { sendEmail_com } from "../controller/mail_com.controller.js";

const router = express.Router();

router.post("/mail_info", sendEmail_info);
router.post("/mail_com", sendEmail_com);

export default router;
