const UserRegister = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports.signup = async (req, res) => {
  const { name, email, password, confirmpassword, mobile } = req.body;

  UserRegister.findOne({ email: email }, async (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const UserData = new UserRegister({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      });

      await UserData.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "true" });
        }
      });
    }
  });
};


module.exports.login = async (req, res) => {
    const {email, password} = req.body;

    UserRegister.findOne({email: email}, async (err, user) => {
        if (user) {
            const passwordCheck = await bcrypt.compare(password, user.password);
            
            if(passwordCheck){
                res.send({message: "true", user: user})
            }else {
                res.send({message: "Incorrect Login Details"})
            }
        } else {
            res.send({message: "User not Registered !"})
        }
    })
}