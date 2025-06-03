import sibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail_info = async (userDetails) => {
  try {
    let firstName, lastName;
    const brevoClient = sibApiV3Sdk.ApiClient.instance;
    const apiKey = brevoClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY_INFO;

    if (userDetails.fullName) {
      const nameParts = (userDetails.fullName || "N/A").trim().split(" ");
      firstName = nameParts.shift();
      lastName = nameParts.join(" ");
    }

    const emailApi = new sibApiV3Sdk.TransactionalEmailsApi();

    // Email content
    const emailContent = {
      sender: {
        email: "email@manishmahato.info.np",
        name: "Manish Singh Mahato",
      },
      to: userDetails.recipientEmail ? [{ email: userDetails.recipientEmail }] : [],
      bcc: [{ email: "contact@msmahato.com.np", name: "Portfolio Website" }],
      subject: userDetails.subject || "No Subject",
      htmlContent: userDetails.message ? userDetails.message : "<p>No message provided.</p>",
    };
    await emailApi.sendTransacEmail(emailContent);
    return "Hello! I have received your information and will contact you shortly.";
  } catch (error) {
    console.error("from mail_info.controller Failed to send email:", error);
    throw error;
  }
};
