// html form default behaiviour ye hota hai jaise hi click submit kroge wo turant dusare page pe chala jayega

// controlled component isliye use krte hai jo by default html functionality hoti hai use controll kr ske
// data manipulate
// handle input and forms
// react mai vvalue edit nhi ho rhi
// value as a prop treat hoga
// ab humari jo vlaues hai wo react handle krega isliye ye khlata hai react controlled form
import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("Ritika");
  const [password, setPassword] = useState("");
  const handleValue = (e) => {
    if (e.target.value === "firstname") {
      const value = e.target.value;

      setName(value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <>
      <form className="forms">
        <input
          type="text"
          name="fristname"
          Value={name}
          onChange={handleValue}
        />
        <input
          type="text"
          name="password"
          Value={password}
          onChange={handleValue}
        />
      </form>
    </>
  );
};

export default Forms;
