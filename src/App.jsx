import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Recipes from "./Recipes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Recipes />
      </div>
    </>
  );
}

export default App;
