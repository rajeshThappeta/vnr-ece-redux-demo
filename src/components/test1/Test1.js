import { useState } from "react";
import "./Test1.css";

function Test1() {
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let [error, setError] = useState({});
  let [btnText, setButtonText] = useState("Submit");

  function validateUserInput(user) {
    let err = {};
    if (user.username.length < 4) {
      err.username = "Min length shd be 4";
    }
    if (user.username.length > 6) {
      err.username = "Max length shd be 6";
    }
    return err;
  }

  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let er = validateUserInput(user);

    if (Object.keys(er).length !== 0) {
      setError(er);
    } else {
      console.log(user);
      setButtonText("Submitted");
      setError({});
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleUser}
        />
        {error.username != "" && <p>{error.username}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleUser}
        />
        <button
          type="submit"
          style={{ backgroundColor: error ? "red" : "green" }}
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}

export default Test1;
