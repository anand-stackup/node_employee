var Logindb = require("../model/userModel");
const express = require("express");
const bcrypt = require("bcrypt");

// Authentication
// Register user
exports.signup = async (req, res) => {
  const data = {
    name: req.body.userName,
    password: req.body.password,
  };

  // check if user already exist
  const existingUser = await Logindb.findOne({ name: data.name });

  if (existingUser) {
    res.send("User already exists. Please choose a different username.");
  } else {
    // hashing password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userdata = await Logindb.insertMany(data);
    console.log(userdata);

    // session after successful signup
    req.session.user = userdata;
    res.redirect("/login");
  }
};

// login
exports.login = async (req, res) => {
  try {
    const check = await Logindb.findOne({ name: req.body.userName });
    if (!check) {
      res.send("User not found");
    } else {
      const isPasswordmatch = await bcrypt.compare(
        req.body.password,
        check.password
      );
      console.log(isPasswordmatch);
      if (isPasswordmatch) {
        // Set the user session upon successful login
        req.session.user = check;
        res.redirect("/");
      } else {
        res.send("wrong password");
      }
    }
  } catch {
    res.send("Wrong details");
  }
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};
