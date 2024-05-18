import { useState } from 'react';
import './App.css'
import Buttons from './Components/Buttons';
import Input from './Components/Input'

function App() {

  const [calval, setCalVal] = useState("");
  const handleOnClickEvent = (e) => {
    let pressed = e.target.textContent;
    if (pressed === "AC") {
      setCalVal("");
    }
    else if (pressed === "=") {
      const res = eval(calval);
      setCalVal(res);
    }
    else if (pressed === "()") {
      let newVal = calval;
      let openParens = (calval.match(/\(/g) || []).length;
      let closeParens = (calval.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        newVal += ")";
      } else {
        newVal += "(";
      }
      setCalVal(newVal);
    }

    else if (pressed === "⌦") {
      let newTextContent = calval.slice(0, -1);
      setCalVal(newTextContent);
    }
    else {
      const newVal = calval + pressed;
      setCalVal(newVal);
    }

  }
  return (
    <>
      <div className='container'>
        <Input calval={calval} />
        <Buttons handleOnClickEvent={handleOnClickEvent} />
      </div>
    </>
  )
}

export default App
