import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../Helper";
import { useAuth } from "../../Helper/Auth/auth-context";

const Login = () => {
  const { dispatchUserState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const previousRoute = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const testLoginHandler = (e) => {
    e.preventDefault();
    setEmail("chandler@friends.com");
    setPassword("chandlerBing123");
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, password, dispatchUserState, navigate, previousRoute);
    setEmail("");
    setPassword("");
  };

  return (
    <main className="login flex_col flex_align__center mb_10 pt_8">
      <h1 className="h2 ">Login</h1>
      <form className="flex_col my_8 mx_auto">
        <label className="label field_required" htmlFor="email_id">
          Email address
        </label>
        <input
          id="email_id"
          type="email"
          value={email}
          placeholder="sheldon@tbbt.com"
          className="input block"
          onChange={emailHandler}
          required
        />
        <div className="login_pwd">
          <label htmlFor="password" className="label field_required" required>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input block"
            placeholder="Your password here..."
            value={password}
            onChange={passwordHandler}
            required
          />
          <button
            className="btn_icon btn_show__password"
            onClick={showPasswordHandler}>
            <span className="material-icons outlined visibility ">
              visibility_off
            </span>
          </button>
        </div>
        <div className="remember_me">
          <input type="checkbox" id="check_box" />
          <label htmlFor="check_box">Remember me</label>
        </div>
        <button
          className="btn btn_primary btn_sm txt_semibold btn_login py_3 px_6"
          onClick={loginHandler}>
          Login
        </button>
        <button
          className="btn btn_sm mt_2 btn_test_login"
          onClick={testLoginHandler}>
          Fill with test credentials
        </button>
        <a className="txt_sm forgot_pwd">Forgotten Password?</a>
        <hr className="hr my_3" />
        <Link to="/signUp" className="btn btn_create__acc btn_sm txt_semibold">
          Create New Account
        </Link>
      </form>
    </main>
  );
};

export { Login };
