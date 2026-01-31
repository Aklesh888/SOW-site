import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma.js";


const router = express.Router();

export const RegisterController = async (req, res) => {
  
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.json({ message: "User has been created" });
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
}

export const LoginController = async (req, res) => {

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({where: { email } });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }


  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  res.json({ token });
}

