import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Input from "./Components/Input";

function App() {
  const [calval, setCalVal] = useState("");
  const handleOnClickEvent = (e) => {
    let pressed = e.target.textContent;

    if (pressed === "AC") {
      setCalVal("");
    } else if (pressed === "=") {
      try {
        const res = eval(calval);
        setCalVal(res.toString());
      } catch (err) {
        setCalVal("Error");
      }
    } else if (pressed === "()") {
      let newVal = calval;
      let openParens = (calval.match(/\(/g) || []).length;
      let closeParens = (calval.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        newVal += ")";
      } else {
        if (/\d$/.test(newVal)) {
          newVal += "*";
        }
        newVal += "(";
      }
      setCalVal(newVal);
    } else if (pressed === "⌦") {
      let newTextContent = calval.slice(0, -1);
      setCalVal(newTextContent);
    } else {
      let newVal = calval;
      if (/\)$/.test(newVal) && /\d/.test(pressed)) {
        newVal += "*";
      }
      newVal += pressed;
      setCalVal(newVal);
    }
  };

  return (
    <>
      <div className="container">
        <Input calval={calval} />
        <Buttons handleOnClickEvent={handleOnClickEvent} />
      </div>
    </>
  );
}

export default App;
