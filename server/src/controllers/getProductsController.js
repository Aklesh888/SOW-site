import { prisma } from "../prisma.js";

export const getProductsController = async (req, res) => {
  try {
    const userId = req.user.userId;

    const products = await prisma.product.findMany({
      where: { userId },
    });

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products ,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
