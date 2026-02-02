import { prisma } from "../prisma.js";

export const updateProductController = async (req, res) => {
  const productId = req.params.id;
  const userId = req.user.userId;

  const product = await prisma.product.findFirst({
    where: { id: Number(productId), userId },
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const fieldsToBeUpdated = [
    "name",
    "description",
    // "articleNo",
    "inStock",
    "unit",
    "price",
    "inPrice",
  ];
  const updatedData = {};

  fieldsToBeUpdated.forEach((field) => {
    if (req.body[field] !== undefined) {
      updatedData[field] = req.body[field];
    }
  });

  console.log(updatedData);
  

  const result = await prisma.product.update({
    where: { id: Number(productId) },
    data: updatedData,
  });

  res.json({ message: "Product has been updated", result });
};
