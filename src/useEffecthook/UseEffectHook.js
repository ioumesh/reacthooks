import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
const UseEffectHook = () => {
  const [comments, setComment] = useState("");
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((res) => res.json())
  //       .then((data) => setComment(data[0].email));
  //     console.log("Api was called");
  //   }, []);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComment(res.data[0].email);
    });
    console.log("api call");
  }, [count]);

  return (
    <div>
      <p>{comments}</p>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default UseEffectHook;
