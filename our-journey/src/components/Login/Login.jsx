import React from "react";
import "./Login.css";
import Title from "../Title/Title";
const Login = () => {
  return (
    <div className="login-container">
      <Title
        title="Sign in and start sharing"
        subTitle="Or register to start sharing journeys."
      />
      <div className="form-container">
        <form class="signup-form" action="/submit_signup" method="post">
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" required />

          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label for="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />

          <div class="options">
            <div>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label for="remember-me">Remember Me</label>
            </div>
            <a href="/forgot_password">Forgot Password?</a>
          </div>

          <button type="submit">Sign Up</button>

          <div class="login-link">
            <p>
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
