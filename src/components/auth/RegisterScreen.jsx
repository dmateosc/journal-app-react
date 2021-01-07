import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui )
  const [formValues, handleInputChange] = useForm({
    name: "David",
    email: "mateoscano.david@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email,password,name))

    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("El nombre es muy corto"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email no valido"));
      return false;
    } else if (
      password !== password2 || password.length < 6
    ) {
      dispatch(setError("Contraseña no válida"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        { msgError && <div className="auth__alert-error">{
            msgError

        }</div>}
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <Link className="link mt-5" to="/auth/login">
          Already Registered?
        </Link>
      </form>
    </>
  );
};
