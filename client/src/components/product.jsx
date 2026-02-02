import { useState } from "react";
import productStyles from "../styles/PricelistProduct.module.css";
import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../services/updateProduct";
import { toast } from "react-toastify";

export const Product = ({
  id,
  articleNo,
  name,
  inPrice,
  price,
  description,
  inStock,
  unit,
}) => {
  const [data, setData] = useState({
    articleNo: articleNo,
    name: name,
    inPrice: Number(inPrice),
    price: Number(price),
    unit: unit,
    inStock: Number(inStock),
    description: description,
  });

  const { mutate } = useMutation({
    mutationKey: ["update", id],
    mutationFn: () => updateProduct(id, data),
    onSuccess: () => toast('updated successfully')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: e.target.type === "number" ? Number(value) : value,
    }));

  };

  return (
    <div className={productStyles.productContainer}>
      <input
        type="text"
        name="articleNo"
        className={productStyles.inputArticleNo}
        value={data.articleNo}
        onChange={handleChange}
        onBlur={() => mutate(data)}
      />
      <input
        type="text"
        name="name"
        className={productStyles.inputProductName}
        value={data.name}
        onChange={handleChange}
        onBlur={() => mutate(data)}
      />
      <input
        type="number"
        name="inPrice"
        className={productStyles.inputInPrice}
        value={data.inPrice}
        onChange={handleChange}
        onBlur={() => mutate(data)}
      />
      <input
        type="number"
        name="price"
        className={productStyles.inputPrice}
        value={data.price}
        onChange={handleChange}
        onBlur={() => mutate(data)}
      />
      <input
        type="text"
        name="unit"
        className={productStyles.inputUnit}
        value={data.unit}
        onBlur={() => mutate(data)}
        onChange={handleChange}
      />
      <input
        type="number"
        name="inStock"
        className={productStyles.inputInStock}
        value={data.inStock}
        onChange={handleChange}
        onBlur={() => mutate(data)}
      />
      <input
        type="text"
        name="description"
        className={productStyles.inputDescription}
        value={data.description}
        onBlur={() => mutate(data)}
        onChange={handleChange}
      />
    </div>
  );
};
