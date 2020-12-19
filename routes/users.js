import express from "express";

const router = express.Router();
import User from "../models/UserModel.js";

// all routes here are starting with /users

//index route
router.get("/", async (req, res) => {
  try {
    let users = await User.find();
    if (!users) throw Error("something wrong when request!");

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//show one data route
router.get("/:id", async (req, res) => {
  try {
    let selectedUser = await User.findById(req.params.id);
    if (!selectedUser) throw Error("something wrong when request!");

    res.status(200).json(selectedUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//create route
router.post("/", async (req, res) => {
  const newUser = new User(req.body);

  try {
    let user = await newUser.save();
    if (!user) throw Error("something wrong when request!");

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//update one data route
router.patch("/:id", async (req, res) => {
  try {
    let userUpdated = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!userUpdated) throw Error("Updating User data failed!");

    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

//delete one data route
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params);
    const userDeleted = await User.findByIdAndRemove(req.params.id);
    if (!user) throw Error("No User data found!");

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

export default router;
