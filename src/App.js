import React,{useState} from "react";
import InputForm from "./InputForm";
import Productlists from "./Productlist";

const App = ()=> {
   

  
  return (
    <div>
      <InputForm />
      <Productlists list={[]} />
    </div>
  );
}

export default App;
