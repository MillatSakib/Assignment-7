import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Recipes from "./Recipes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Recipes />
        <Toaster></Toaster>
      </div>
    </>
  );
}

export default App;
