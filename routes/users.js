var express = require("express");
var router = express.Router();
var { User } = require("../mongooseModels/model.users");
const { mongo } = require("mongoose");
var bcrypt = require("bcryptjs");
var config = require("config");
var _ = require("lodash");
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");
var validateUserLoginMW = require("../middlewares/authUserLog");
router.get("/", async (req, res, next) => {
  let user = await User.find();
  res.send(user[0]._id);
});

router.post("/register", validateUserRegMW, async (req, res) => {
  let newuser = await User.findOne({ email: req.body.email });
  if (newuser != null)
    return res.status(400).send("Sorry, user already exists.");
  newuser = new User();
  newuser.fname = req.body.fname;
  newuser.lname = req.body.lname;
  newuser.email = req.body.email;
  newuser.password = req.body.password;
  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(newuser.password, salt);
  await newuser.save();
  return res.status(200).send("OK");
  // return res.send(_.pick(user, ["email", "name"]));
});

//sends all users to show on a table
//@ users/allusers
router.get("/allusers", async (req, res) => {
  let user = await User.find();
  if (!user) return res.status(400).send("Sorry, no user found!");
  return res.send(user);
});
//updates the role from the user data table on client side
//@ users/update
router.post("/update", async (req, res) => {
  let user = await User.findById(req.body._id);
  if (!user) return res.status(400).send("Sorry, no user found!");
  user.role = req.body.role;
  await user.save();
  return res.send();
});
//this route is to send user account details on the edit user details page
//@ /users/details/id
router.get("/details/:id", async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  if (!user) return res.status(400).send("Sorry, no user found!");
  return res.send(_.pick(user, ["email", "fname", "lname"]));
});
//this route is to update user account details on the edit user details page
//@ POST /users/details/id
router.post("/details/:id", validateUserRegMW, async (req, res) => {
  let id = req.params.id;
  if (req.body.password === req.body.newPassword) {
    return res.status(400).send("Passwords should be different.");
  } else if (req.body.newPassword.length < 5) {
    return res
      .status(400)
      .send("New password's length should be greater than 4.");
  }

  let user = await User.findById(id);
  if (!user) return res.status(400).send("Sorry, no user found!");

  let password = await bcrypt.compare(req.body.password, user.password);
  if (!password) return res.status(400).send("Wrong old password");

  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.newPassword, salt);
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  await user.save();
  return res.status(200).send("Password successfully changed!");
});

router.post("/login", validateUserLoginMW, async (req, res) => {
  let userData = await User.findOne({
    email: req.body.email,
  });
  if (!userData)
    return res.status(400).send("Sorry, user with this email not found.");

  let password = await bcrypt.compare(req.body.password, userData.password);
  if (!password) return res.status(400).send("Wrong password");

  let token = jwt.sign(
    { _id: userData._id, name: userData.fname, role: userData.role },
    config.get("jwt")
  );

  let user2 = jwt.verify(token, config.get("jwt"));
  return res.send({ ok: "login successfull", token, user2 });
});

module.exports = router;
