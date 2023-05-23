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
      <div>
        <h1 className="text-5xl text-center">Menu</h1>
        <Category myCat={myCat} />
        <Menu mitem={mitem}/>
       
      </div>
    </div>
  );
}

export default App;
