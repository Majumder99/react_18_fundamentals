import { useState } from "react";

export const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Sourav")}>Subscribe</button>
    </>
  );
};
