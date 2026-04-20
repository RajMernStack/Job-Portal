import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
         
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exist with this email.',
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile:{
                profilePhoto:cloudResponse.secure_url,
            }
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        };
        // check role is correct or not
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        };

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = async (req, res) => {
  try {
    const { fullname, bio, skills } = req.body;
    const file = req.file;
    const userId = req.id;

    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false
      });
    }

    // Fix 1: Ensure profile object exists to prevent "undefined 'profile'" crash
    if (!user.profile) user.profile = {};

    // Update text fields
    if (fullname) user.fullname = fullname;
    if (bio) user.profile.bio = bio;
    if (skills) {
      user.profile.skills = skills.split(",").map(s => s.trim()).filter(Boolean);
    }

    // Fix 2: Only run upload if file exists + wrap in try/catch
    if (file) {
      try {
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
          resource_type: "raw",
          folder: "resumes"
        });
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginalName = file.originalname;
      } catch (uploadErr) {
        console.log("Cloudinary Error:", uploadErr);
        return res.status(500).json({
          message: "Resume upload failed. Check Cloudinary keys.",
          success: false
        });
      }
    }

    await user.save();

    const updatedUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    };

    return res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser,
      success: true
    });
  } catch (error) {
    console.log("UpdateProfile Error:", error); // This prints to your terminal
    return res.status(500).json({
      message: "Something went wrong",
      success: false
    });
  }
};