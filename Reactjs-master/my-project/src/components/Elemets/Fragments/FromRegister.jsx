import { useState } from "react";
import Button from "../Button/Index";
import InputForm from "../Input/Index";
import { Link } from "react-router-dom";

const FromRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("User created successfully.");
    } else {
      alert(data.message || "Error during sign-up.");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <InputForm
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputForm
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <b className="flex justify-center mb-3 text-white">or</b>
      <Link to="./www.goggle.com" className="flex justify-center">
        <img src="/img/pk.png" alt="" className="w-[50%] bg-white p-2 rounded-full" />
      </Link>
      <div className="flex justify-center w-full mt-10">
        <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default FromRegister;
