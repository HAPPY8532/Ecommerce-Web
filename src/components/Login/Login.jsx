import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const dummyUser = {
    email: "happy@user.com",
    password: "123456",
  };

  const guestUser = {
    email: "guest@demo.com",
    password: "guest123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (email === dummyUser.email && password === dummyUser.password) ||
      (email === guestUser.email && password === guestUser.password)
    ) {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Email or Password.");
    }
  };

  const handleGuestLogin = () => {
    setEmail(guestUser.email);
    setPassword(guestUser.password);
    setMessage("Logged in as Guest!");
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className={style.loginContainer}>
      <form onSubmit={handleLogin} className={style.loginForm}>
        {onClose && (
          <button type="button" className={style.closeButton} onClick={onClose}>
            &times;🏁
          </button>
        )}

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <button type="button" onClick={handleGuestLogin} className={style.guestButton}>
          Continue as Guest
        </button>

        {message && <p className={style.message}>{message}</p>}

        <p className={style.signupText}>
          Don't have an account?{" "}
          <span onClick={handleSignupRedirect} className={style.signupLink}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
