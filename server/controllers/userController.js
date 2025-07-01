import { getUser, saveUser } from "../models/userModel.js";

export const postUser = (req, res) => {
  const { fname, lname, dob } = req.body;
  if (!fname || !lname || !dob) {
    return res.status(400).json({ msg: "All fields are required." });
  }
  saveUser({ fname, lname, dob });
  res.status(201).json({ msg: "User saved successfully!" });
};

export const getUserData = (req, res) => {
  const user = getUser();
  if (!user) {
    return res.status(404).json({ msg: "No user found." });
  }
  res.json(user);
};

