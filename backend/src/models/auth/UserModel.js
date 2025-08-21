import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please add a valid email",
      ],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    photo: {
      type: String,
      default:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    },

    bio: {
      type: String,
      default: "I am a new user.",
    },

    role: {
      type: String,
      enum: ["user", "admin", "creator"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, minimize: true }
);

// hash password before saving
UserSchema.pre("save", async function (next) {
  //check if password is not modified
  if (!this.isModified("password")) {
    return next();
  }

  // hash password - bcrypt
  // generate salt
  const salt = await bcrypt.genSalt(10);
  // hash with salt
  const hashedPassword = await bcrypt.hash(this.password, salt);
  // set the password to the hashed password
  this.password = hashedPassword;

  // call the next middleware
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
