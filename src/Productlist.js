import React from "react";

const Productlist = (props) => {
  const handleDelete = (itemId) => {
    const updatedList = props.list.filter((item) => item.itemid !== itemId);
    props.setList(updatedList);

    localStorage.removeItem(itemId);
    console.log("Delete item with ID:", itemId);
  };

  const renderCategoryItems = (category) => {
    return props.list
      .filter((item) => item.itemCategory === category)
      .map((item) => (
        <li key={item.itemid}>
          {item.itemid} --- {item.itemSp} --- {item.itemName}
          <button onClick={() => handleDelete(item.itemid)}>Delete</button>
        </li>
      ));
  };

  return (
    <div>
      <h2>Electronic Item</h2>
      <ul>{renderCategoryItems("Electronic Item")}</ul>

      <h2>Food Items</h2>
      <ul>{renderCategoryItems("Food Item")}</ul>

      <h2>Skincare Item</h2>
      <ul>{renderCategoryItems("Skincare Item")}</ul>
    </div>
  );
};

export default Productlist;

// import React from "react";

// const Productlist = (props) => {
//   const handleDelete = (itemId) => {
//     // Implement delete functionality here based on the item ID
//     const updatedList = props.list.filter((item) => item.itemid !== itemId);
//     props.setList(updatedList);
//     localStorage.removeItem(itemId);

//     console.log("Delete item with ID:", itemId);
//   };

  
//   return (
//     <div>
//       <div>
//         <ul>
//           {props.list.map((item) => (
//             <li key={item.itemid}>
//               {item.itemid} --- {item.itemSp} --- {item.itemName}
//               <button onClick={() => handleDelete(item.itemid)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//     </div>
//   );
// };

// export default Productlist;
