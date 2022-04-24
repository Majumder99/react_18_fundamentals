import { useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    alert(`The username is ${username}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
