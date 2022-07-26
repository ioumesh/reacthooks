// hum nhi chahhte ki react control kre
//direct dom krega control krta hai
// uncontrolled mai hum use ref use krte hai

import React, { useRef } from "react";

const Uncontrolled = () => {
  const refObj = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const refData = refObj.current.value;
    console.log(refData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refObj} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
