import { useState } from "react";

import {
  RegistrationWrapper,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
} from "@/components/ui/Auth/AuthView/RegistrationView/RegistrationView.css";

const RegistrationView = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example validation logic
    if (!formData.email || !formData.password) {
      setErrorMessage("Email and Password are required.");
      setSuccessMessage(null);
    } else {
      setErrorMessage(null);
      setSuccessMessage("Registration successful!");
    }
  };

  return (
    <div className={RegistrationWrapper}>
      <div className={RegistrationForm}>
        <h2 className={RegistrationTitle}>Register</h2>

        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              className={RegistrationInput}
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Last Name:
            <input
              className={RegistrationInput}
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email:
            <input
              className={RegistrationInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Password:
            <input
              className={RegistrationInput}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>

          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div style={{ color: "green", marginBottom: "10px" }}>
              {successMessage}
            </div>
          )}

          <button className={RegistrationSubmitButton} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationView;
