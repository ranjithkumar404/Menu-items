import React, { useState } from "react";
import item from './data';
import Category from "./Category";
import Menu from "./Menu";
function App() {
  const [mitem,setMitem]=useState(item);
  return (
    <div className="App">
        <div>
          <h1>Menu</h1>
          <div>
          {
            mitem.map((i)=>{
              const {id,desc,title,img,price,category}=i;
              return (
               <div key={id}>
                <img className="w-[100px]" src={img} alt="" />
                <p>{title}</p>
                <p>${price}</p>
                <p>{desc}</p>
               </div>
              )
            })
          }
          </div>
        </div>
    </div>
  );
}

export default App;
