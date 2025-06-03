import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail_com = async (req, res) => {
  try {
    const brevoClient = sibApiV3Sdk.ApiClient.instance;
    const apiKey = brevoClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY_COM;

    const { recipientEmail, subject, message } = req.body;
    if (!recipientEmail || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    console.log(apiKey.apiKey + "com");
    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

    // Receivers
    const receivers = [{ email: recipientEmail }];

    // Email content
    const emailContent = {
      sender: {
        email: "contact@msmahato.com.np",
        name: "Manish Singh Mahato",
      },
      to: recipientEmail ? [{ email: recipientEmail }] : [],
      subject: subject || "No Subject", // Ensure subject is never empty
      htmlContent: message ? `<p>${message.replace(/\n/g, "<br>")}</p>` : "<p>No message provided.</p>",
    };

    await emailApi.sendTransacEmail(emailContent);
    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
