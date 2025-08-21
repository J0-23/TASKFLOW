import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/auth/UserModel.js";

export const protect = asyncHandler(async (req, res, next) => {
  try {
    // check if user is logged in
    const token = req.cookies.token;

    if (!token) {
      // 401 unauthorized
      return res.status(401).json({ message: "Not authorized, please login" });
    }
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // get user details from token
    const user = await User.findById(decoded.id).select("-password");

    // check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // set user details in request object
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not autorized, token failed" });
  }
});

// admin middleware
export const adminMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    // if user is admin move to the next middleware / controller
    next();
    return;
  }
  // if not admin send 403 forbidden ---- terminate request
  res.status(403).json({ message: "No admin role found" });
});

export const creatorMiddleware = asyncHandler(async (req, res, next) => {
  if (
    req.user &&
    req.user.role === "creator" &&
    req.user &&
    req.user.role === "admin"
  ) {
    // if user is creator move to the next middleware / controller
    next();
    return;
  }
  // if not creator send 403 forbidden ---- terminate request
  res.status(403).json({ message: "No creator role found" });
});

// verified middleware
export const verifiedMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isVerified) {
    // if user is verified move to the next middleware / controller
    next();
    return;
  }

  // if not verified send 403 forbidden ---- terminate the request
  res.status(403).json({ message: "Please verify your email address" });
});
