import React, { useState } from "react";
import './Form.css'

function Form() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [gender, setGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Helper functions for password validation
  function containsUpperCase(str) {
    return /[A-Z]/.test(str);
  }

  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }

  function Submit() {
    if (users.some((user) => user.userName === name)) {
      window.alert("Username already exists.");
      setName("");
      return;
    }

    if (!email.includes("@")) {
      window.alert("Invalid email.");
      setEmail("");
      return;
    }

    if (password !== password2) {
      window.alert("Passwords don't match.");
      setPassword("");
      setPassword2("");
      return;
    }

    if (password.length <= 7 || !containsUpperCase(password) || !containsNumbers(password)) {
      window.alert("Password not strong enough. Must be at least 8 chars, include 1 uppercase and 1 number.");
      setPassword("");
      setPassword2("");
      return;
    }

    const newUser = {
      userName: name,
      password,
      email,
      gender,
    };

    setUsers([...users, newUser]);
    window.alert("Account created successfully!");

    // Clear all inputs
    setName("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setGender("");
    setShowPassword(false);
    setShowPassword2(false);
  }

  return (
    <div id="form-container">
      <h1 id="form-title">Submit form</h1>

      <p id="label-username">Select your user name:</p>
      <input
        id="input-username"
        placeholder="User name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p id="label-email">Email:</p>
      <input
        id="input-email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label id="label-password">Password:
        <input
          id="input-password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </label>

      <label id="label-password2">Confirm Password:
        <input
          id="input-password2"
          placeholder="Confirm Password"
          type={showPassword2 ? "text" : "password"}
          required
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword2(!showPassword2)}>
          {showPassword2 ? "Hide" : "Show"}
        </button>
      </label>

      <p id="label-gender">Gender:</p>
      <select
        id="select-gender"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <br /><br />
      <button id="submit-button" onClick={Submit}>Submit</button>
    </div>
  );
}

export default Form;
