import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  serverTime: {
    type: Date,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
