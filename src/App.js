import React, { useState } from "react";
import InputForm from "./InputForm";
import Productlist from "./Productlist";

const App = () => {
  const [productList, setproductList] = useState([]);

  const addproductHandler = (
    listitemid,
    listitemSp,
    listitemName,
    listitemCategory
  ) => {
    setproductList((prevState) => {
      return [
        ...prevState,
        {
          itemid: listitemid,
          itemSp: listitemSp,
          itemName: listitemName,
          itemCategory: listitemCategory,
        },
      ];
    });
  };

  return (
    <div>
      <InputForm onAddproduct={addproductHandler} />
      <Productlist list={productList} setList={setproductList} />
    </div>
  );
};

export default App;
