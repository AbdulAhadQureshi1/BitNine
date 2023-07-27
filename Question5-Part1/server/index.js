const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/User");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

// i have put uri here, for Bitnine's Test Evaluation use.
//! URI should never be used like this. Must always be stored in .env file.

// mongoose.connect('mongodb+srv://aqureshibscs21seecs:12345@cluster0.mkpuhv5.mongodb.net/?retryWrites=true&w=majority');

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  "mongodb+srv://aqureshibscs21seecs:12345@cluster0.dgvtnvc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log("Error");
  });

app.post("/register", async (req, res) => {
  // Requiring module

  let { email, password } = req.body;
  var hashedPass;
  // let success = false;
  // Encryption of the string password
  bcrypt.genSalt(10, function (err, Salt) {
    // The bcrypt is used for encrypting password.
    bcrypt.hash(password, Salt, function (err, hash) {
      if (err) {
        return console.log("Cannot encrypt");
      }
      hashedPass = hash;
    });
  });

  let user = await userModel.findOne({ email });
  // console.log(user);
  if (!user) {
    userModel
      .create({
        email: email,
        password: hashedPass,
      })
      .then((user) => res.json(user))
      .catch((error) => res.json(error));
  } else {
    return res.status(400).json({
      error: "Account already exists.",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Account doesn't exist" });
  }
  bcrypt.compare(password, user.password,
    async function (err, isMatch) {

        // Comparing the original password to
        // encrypted password
        if (isMatch) {
          return res.status(200).json({message: "Success!", user_data: user.email})
        }
        
        if (!isMatch) {
          return res.status(400).json({message: "Invalid Credentials."})
        }
    })
});

app.listen(3000, () => {
  console.log("server is running...");
});
