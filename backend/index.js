import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import locationRouter from "./route/location.route.js";
import contactReg from "./route/contact.route.js";
import mailer from "./route/mail.route.js";
import path from "path";
import favicon from "serve-favicon";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
  favicon(path.join(__dirname, "public", "JPG_manish_circle.png"))
);
app.options("*", cors());

app.use(express.json());
dotenv.config();

const port = process.env.port || 3000;
const MONGODBURI = process.env.MONGODBURI;

mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log("MongoDB connection failed:", error));

app.get("/", (req, res) => {
  res.send("Hello hacker");
});

app.use("/location", locationRouter);
app.use("/mailer", mailer);
app.use("/contact", contactReg);
