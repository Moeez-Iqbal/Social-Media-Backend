import UserModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authController = {
  
    login: async (req, res) => {
        const payload = req.body;
    
        const user = await UserModel.findOne({
          where: { email: payload.email },
        });
    
        if (!user) {
          return res.status(401).json({
            message: "Invalid credentials",
          });
        }
    
        const result = await bcrypt.compare(payload.password, user.password);
        console.log(result, "result");
        if (!result) {
          return res.status(401).json({
            message: "Invalid credentials",
          });
        }
    
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "40m",
          }
        );
    
        res.json({
          message: "User Logged in",
          token,
        });
      },
      register: async (req, res) => {
        const payload = req.body;
        const saltRounds = 10;
        const hPassword = await bcrypt.hash(payload.password, saltRounds);
    
        const user = await UserModel.create({
          name: payload.name,
          email: payload.email,
          password: hPassword,
        });
    
        res.json({
          message: "User Registered",
        });
      }
    }
  
    export default authController;