const collection = require("./src/backmain.js");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());
app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { username, password } = collection(req.body);
  if(username&&password){
  try {
    const check1 = await collection.findOne({ username: username });
    const check2 = await bcrypt.compare(password,check1.password);
    if (check1 && check2) {
      res.json("exist");
      
    } else {
      res.json("invalid");
    }
  } catch {
    res.json("notexist");
  }
}
else {
  res.json("enterdetails");
}
});
app.listen(8000, () => {
  console.log("port connected");
});

app.post("/Signup", async (req, res) => {
  const { username, password, Fullname, email, Confpass, mobileno } = req.body;

  const check1 = await collection.findOne({ username: username });
  const check2 = await collection.findOne({ email: email });

  
  if (check1 && check2) {
    res.json("exist");
  } 
  else {
    if (username && Fullname && password && Confpass && email && mobileno) {
      if (password === Confpass) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const data = {
            username: username,
            password: hashPassword,
            Fullname: Fullname,
            email: email,
            mobileno: mobileno,
          };
          await collection.insertMany([data]);
          res.json("ok");
         
        } catch (error) {
          res.json("q");
        }
      } else {
        res.json("passwrong");
      }
    } else {
      res.json("needdetails");
    }
  }
});
