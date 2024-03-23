import mongoose, { Schema, model } from "mongoose";

const emailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Email = mongoose.models.email || model("email", emailSchema);

export default Email;
