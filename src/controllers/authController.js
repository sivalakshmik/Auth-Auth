
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js"; 


// GET CURRENT USER
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) return res.status(404).json({ message: "User not found" });
    res.json({ user: req.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// lOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(" Login attempt:", email, password);

    const user = await User.findOne({ email });
    console.log(" Found user:", user);

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h"}); 
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

      const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
