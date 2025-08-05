import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "suv",
    age: 20,
  };

  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Suprim Sigdel
      </h1>
      <Card username="chaiaurcode" btnText="click" />
      <br></br>
      <br></br>
      <Card username="suv" btnText="visit" />
      <br></br>
      <br></br>
      <Card />
    </>
  );
}

export default App;
