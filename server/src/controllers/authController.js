import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {prisma} from "../prisma.js";


export const RegisterController = async (req, res) => {

  const { email, password, country } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        country 
      },
    });

    res.json({ message: "User has been created" });
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
}

export const LoginController = async (req, res) => {

  const { email, password } = req.body;

  if (req.body == null) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  if (!email || !password  ) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  
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

  res.status(200).json({ token });
}

