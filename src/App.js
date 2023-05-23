import React, { useState } from "react";
import item from './data';
import Category from "./Category";
import Menu from "./Menu";

function App() {
  const [mitem, setMitem] = useState(item);

  const myCat=(cat)=>{
   let newItem= item.filter((a)=>
          a.category === cat)
          setMitem(newItem)
    
  }
  return (
    <div className="App">
      <div className=" space-y-5">
        <div className=" grid place-items-center">
          <h1 className="text-5xl text-center">Menu</h1>
          <div className="w-[100px] h-[3px] "></div>
        </div>
        <Category myCat={myCat} />
        <Menu mitem={mitem}/>
       
      </div>
    </div>
  );
}

export default App;
