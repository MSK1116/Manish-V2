import express from "express";
import Contact from "../model/contact.model.js";
import { parseISO, differenceInMinutes, differenceInMilliseconds } from "date-fns";

import { sendEmail_info } from "./mail_info.controller.js";

export const contactReg = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, date } = req.body;
    let tempTime, tempRemain, tempRemain2, firstName, lastName;
    const currentSeverTime = new Date();

    if (fullName) {
      const nameParts = (fullName || "N/A").trim().split(" ");
      firstName = nameParts.shift();
      lastName = nameParts.join(" ");
    }
    const user = await Contact.findOne({ email }).sort({ serverTime: -1 });
    if (user) {
      console.log(user);
      tempTime = user.serverTime;
      const diffInMin = differenceInMinutes(currentSeverTime, tempTime);
      const diffInMs = differenceInMilliseconds(currentSeverTime, tempTime);

      if (diffInMin < 1) {
        const totalMs = 4 * 60000;
        tempRemain = 3 - diffInMin;
        tempRemain2 = Math.floor((totalMs - diffInMs) / 1000) % 60;

        return res.status(400).json({ message: `Please wait ${tempRemain}:${tempRemain2.toString().padStart(2, "0")} minutes before submitting again.` });
      }
    }

    const contactRegTemp = new Contact({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
      serverTime: currentSeverTime,
    });

    await contactRegTemp.save();

    const emailStatus = await sendEmail_info({
      fullName,
      recipientEmail: email,
      phoneNumber,
      subject: `Thanks for Reaching Out ${fullName}`,
      brevoListId: 2,
      message: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Contact Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    /* General mobile responsiveness */
    @media only screen and (max-width: 600px) {
      .container {
        padding: 20px !important;
        width: 100% !important;
      }

      .social-links {
        flex-direction: column !important;
        align-items: stretch !important;
        padding:15px;
        width:90% !important;
      }

      .social-links a {
        margin-bottom: 10px !important;
        width: 95% !important;
        text-align: center;
      }
    }
  </style>
</head>

<body style="margin: 0; padding: 0px; font-family: 'Poppins', sans-serif; background-color: #f4f4f4;">
  <div class="container"
    style="max-width: 600px; margin: 30px auto; padding: 30px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 4px rgba(0,0,0,0.05); color: #333;">
    <h2
      style="text-align: center; color: #1e40af; margin-bottom: 20px; text-transform: uppercase; font-weight: 600; font-size: 20px;">
      Thank you for reaching out!
    </h2>

    <div style="font-size: 16px; line-height: 1.6;">
      <p>Dear ${firstName},</p>

      <p>
        I’ve received your contact details and want to let you know that I’ll get back to you as soon as possible.
      </p>

      <p>
        In the meantime, feel free to approach me using my other social accounts:
      </p>

      <div class="social-links"
        style="display: flex; flex-wrap: wrap; justify-content: center; margin-top: 20px; gap: 8px;">
        <a href="https://www.facebook.com/manu0519/" target="_blank"
          style="margin-right:5px; background-color: #3b5998; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 5px; font-size: 14px; font-weight: 600;">Facebook</a>
        <a href="https://www.linkedin.com/in/manu0519/" target="_blank"
          style="margin-right:5px; background-color: #0077b5; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 5px; font-size: 14px; font-weight: 600;">LinkedIn</a>
        <a href="https://www.instagram.com/manishsingh0519/" target="_blank"
          style="margin-right:5px; background-color: #e1306c; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 5px; font-size: 14px; font-weight: 600;">Instagram</a>
        <a href="https://wa.me/9779812055778?text=I%20visited%20your%20website%20and%20looking%20to%20get%20connected"
          target="_blank"
          style="margin-right:5px; background-color: #25d366; color: #fff; text-decoration: none; padding: 10px 16px; border-radius: 5px; font-size: 14px; font-weight: 600;">WhatsApp</a>
      </div>

      <p style="margin-top: 20px;">Thanks for getting in touch!</p>

      <p>
        Warm regards,<br />
        Manish Singh Mahato
      </p>
    </div>

    <div style="margin-top: 30px; font-size: 13px; color: #888; text-align: center;">
      This is an automated email from
      <a href="https://www.manishmahato.info.np/" target="_blank"
        style="color: #888; text-decoration: none;">manishmahato.info.np</a>
    </div>
  </div>
</body>

</html>
`,
    });

    res.status(201).json({ emailStatus });
  } catch (error) {
    console.log("Failed contact_controller.js", error.message);
    res.status(500).json({ message: error.message });
  }
};
