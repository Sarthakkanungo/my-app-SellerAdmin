import React, { useState } from "react";

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
    localStorage.setItem(formData.id, JSON.stringify(formData));

    props.onAddproduct(
      formData.id,
      formData.SellingPrice,
      formData.ProductName,
      formData.Category
    );

    console.log(formData, "in InputForm");
    setProductId("")
    setSellingPrice("");
    setProductName("");
    setCategory();
    document.getElementById("categoryDropdown").selectedIndex = 0;
   
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
          <select id="categoryDropdown" onChange={categoryChangeHandler}>
            <option id="default" value="default">Select</option>
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
