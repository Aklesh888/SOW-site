import { prisma } from "../prisma.js";

export const addProductController = async (req, res) => {
  const userId = req.user.userId;
  const { name, description, articleNo, inStock, unit, price, inPrice } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      articleNo,
      inStock,
      unit,
      price,
      inPrice,
      userId,
    },
  });

  res.status(201).json(product);
};
