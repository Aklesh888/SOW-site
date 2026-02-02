import { useState } from "react";
import productStyles from "../styles/PricelistProduct.module.css";
import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../services/updateProduct";
import { toast } from "react-toastify";
import { FcRight } from "react-icons/fc";

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
    onSuccess: () => toast("updated successfully"),
    onError: () => toast.error("something went wrong"),
  });

  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: e.target.type === "number" ? Number(value) : value,
    }));
  };

  const handleBlur = () => {
    mutate(data);
    setIsSelected(false);
    console.log(isSelected);
  };

  return (
    <div className={productStyles.productContainer}>
      {/* <FcRight  size={12} style={{scale: `${isSelected ? '1' : '0'}`}}/> */}
      <input
        onFocus={() => setIsSelected(true)}
        type="text"
        name="articleNo"
        className={productStyles.inputArticleNo}
        value={data.articleNo}
        onChange={handleChange}
        onBlur={() => handleBlur()}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="text"
        name="name"
        className={productStyles.inputProductName}
        value={data.name}
        onChange={handleChange}
        onBlur={() => handleBlur()}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="number"
        name="inPrice"
        className={productStyles.inputInPrice}
        value={data.inPrice}
        onChange={handleChange}
        onBlur={() => handleBlur()}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="number"
        name="price"
        className={productStyles.inputPrice}
        value={data.price}
        onChange={handleChange}
        onBlur={() => handleBlur()}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="text"
        name="unit"
        className={productStyles.inputUnit}
        value={data.unit}
        onBlur={() => handleBlur()}
        onChange={handleChange}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="number"
        name="inStock"
        className={productStyles.inputInStock}
        value={data.inStock}
        onChange={handleChange}
        onBlur={() => handleBlur()}
      />
      <input
        onFocus={() => setIsSelected(true)}
        type="text"
        name="description"
        className={productStyles.inputDescription}
        value={data.description}
        onBlur={() => handleBlur()}
        onChange={handleChange}
      />
    </div>
  );
};
