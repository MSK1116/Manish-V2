import express from "express";
import { contactReg } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/", contactReg);

export default router;
