import React, { useState } from "react";
import Productlists from "./Productlist";
//import Productlist from "./Productlist";

const InputForm = (props) => {
  const [enterProductID, setProductId] = useState("");
  const [enterSellingPrice, setSellingPrice] = useState("");
  const [enterProductName, setProductName] = useState("");
  const [entercategory, setCategory] = useState("");

  const productIdChangeHandler = (event) => {
    setProductId(parseInt(event.target.value));
  };

  const sellingPriceChangeHandler = (event) => {
    setSellingPrice(parseInt(event.target.value));
  };

  const productChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: enterProductID,
      SellingPrice: enterSellingPrice,
      ProductName: enterProductName,
      Category: entercategory,
    };
    localStorage.setItem(formData.Category, JSON.stringify(formData));
    props.onsaveformData(formData);
    setProductId("");
    setSellingPrice("");
    setProductName("");
    setCategory("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Product Id</label>
          <input
            type="number"
            value={enterProductID}
            onChange={productIdChangeHandler}
          />

          <label>SellingPrice</label>
          <input
            type="number"
            value={enterSellingPrice}
            onChange={sellingPriceChangeHandler}
          />

          <label>Product Name</label>
          <input
            type="text"
            value={enterProductName}
            onChange={productChangeHandler}
          />

          <label>Choose a category</label>
          <select onChange={categoryChangeHandler}>
            <option value="Electronic Item">Electronic Item</option>
            <option value="Food Item">Food Item</option>
            <option value="Skincare Item">Skincare Item</option>
          </select>

          <button type="submit">Add Product</button>
        </div>
      </form>
      <h1>Products</h1>
    </div>
  );
};
export default InputForm;
