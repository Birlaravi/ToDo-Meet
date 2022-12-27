import { useState } from "react";
import "./App.css";
import Nav from "./component/Nav";
import Todos from "./component/Todos";

function App() {
  // const [search,setsearch]=useState("");
  // const handleSearch=(data)=>{
  //     setsearch(data);
  // }
  return (
    <>
    <Nav style={{position:"sticky",top:0}}  />
      <Todos />
    </>
  );
}

export default App;
