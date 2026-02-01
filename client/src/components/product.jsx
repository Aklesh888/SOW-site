import productStyles from "../styles/PricelistProduct.module.css";

export const Product = ({
  articleNo,
  name,
  inPrice,
  price,
  description,
  inStock,
  unit,
}) => {
  return (
    <div className={productStyles.productContainer}>
      <input
        type="text"
        name="articleNo"
        className={productStyles.inputArticleNo}
        value={articleNo}
      />
      <input
        type="text"
        name="productName"
        className={productStyles.inputProductName}
        value={name}
      />
      <input
        type="text"
        name="inPrice"
        className={productStyles.inputInPrice}
        value={inPrice}
      />
      <input type="text" name="price" className={productStyles.inputPrice} 
        value={price}
       />
      <input type="text" name="unit" className={productStyles.inputUnit} 
        value={unit}
      />
      <input
        type="text"
        name="inStock"
        className={productStyles.inputInStock}
        value={inStock}

      />
      <input
        type="text"
        name="description"
        className={productStyles.inputDescription}
        value={description}

      />
    </div>
  );
};
