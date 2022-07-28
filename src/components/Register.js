import { StyledRegister } from "./styles/Register.styled";
//import { Button } from "./styles/Button.styled";
import React from "react";

export default function Register({setShowModal}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowModal((prev) => !prev)
    // To-do Put logic to handle form registration
  };
  return (
    <StyledRegister>
      <form onSubmit={handleSubmit}>
        <label for="email"> Please enter your email: </label>
        <input type='email' id="email" name="email"/>
        <button 
        type="submit">
          Click to Register
        </button>
      </form>
    </StyledRegister>
  );
}
