import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeError, setError } from "../../actions/ui";
import { startRegisterEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
const Register = () => {
  const dispatch = useDispatch();
  const { loading, msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    // regex email
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (email.toLowerCase().match(emailPattern) === null) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.trim().length < 5) {
      dispatch(
        setError(
          "Password is not valid, should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name));
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
      >
        {msgError && (
          <span className="auth__alert-error" role="alert">
            {msgError}
          </span>
        )}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={loading}
        >
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default Register;
