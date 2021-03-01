import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [msg, updateMessage] = useState("");
  const [msgType, updateMessageType] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "username":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm":
        setConfirmPass(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "" || password === "" || confirmPass === "") {
      updateMessage("all required fields must not be blank");
      updateMessageType("error");
    } else if (password !== confirmPass) {
      updateMessage("passwords do not match");
      updateMessageType("error");
    } else {
      updateMessage("success!");
      updateMessageType("success");
    }

    return;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {msg !== "" && <div className={`message ${msgType}`}>{msg}</div>}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm"
            value={confirmPass}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
