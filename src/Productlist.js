import React, { useState } from "react";

const Productlists = (props) => {
  const saveUserdata = (Data) => {
    console.log(Data);
  };

  return (
    <div>
      <h2>Electronic Item</h2>
      <div>
        <ul>
          <li>
            {props.saveUserdata}
            <button> Delete</button>
          </li>
        </ul>
      </div>
      <h2>Food Item</h2>

      <ul>
        <li>
          {props.saveUserdata}
          <button>Delete</button>
        </li>
      </ul>
      
      <h2>Skincare Item</h2>
      <ul>
        <li>
          {props.saveUserdata}
          <button> Delete</button>
        </li>
      </ul>
    </div>
  );
};
export default Productlists;
