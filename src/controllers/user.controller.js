const userCtrl = {};
const userModel = require('../models/user.model');

userCtrl.listAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      res.status(404).json({ message: 'Users not found', ok: false });
    }
    res.json({ ok: true, users });
  } catch (error) {
    res.status(500).json({ message: error.message, ok: false });
  }
};
userCtrl.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email }); //verify if user alerady exists with email delivered
    if (user) {
      return res.status(409).json({ message: 'User already exists', ok: false });
    }
    // if user does not exist, create a new one
    const newUser = new userModel({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(200).json({ message: 'User created successfully', ok: true, newUser }); // user
  } catch (error) {
    res.status(500).json({ message: error.message, ok: false });
  }
};

module.exports = userCtrl;
