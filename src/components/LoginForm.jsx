import axios from "axios";
import { useState } from "react";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "60332580-4778-401f-9f01-f29e510acf09",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Oops. Incorrct Credentials");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            style={{ borderRadius: "18px" }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            style={{ borderRadius: "18px" }}
            required
          />
          <div align="center">
            <button
              className="button"
              type="submit"
              style={{
                backgroundColor: "#4CAF50" /* Green */,
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                borderRadius: "13px",
                display: "inline-block",
                fontSize: "16px",
                width: "auto",
              }}
            >
              Sign-Up
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
