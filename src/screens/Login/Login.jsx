import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          placeholder="sheldon@tbbt.com"
          className="input block"
          required
        />
        <div className="login_pwd">
          <label htmlFor="password" className="label field_required" required>
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input block"
            placeholder="Your password here..."
            required
          />
          <button className="btn_icon btn_show__password">
            <span className="material-icons outlined visibility ">
              visibility_off
            </span>
          </button>
        </div>
        <div className="remember_me">
          <input type="checkbox" id="check_box" />
          <label htmlFor="check_box">Remember me</label>
        </div>
        <button className="btn btn_primary btn_sm txt_semibold btn_login py_3 px_6">
          Login
        </button>
        <button className="btn btn_sm mt_2 btn_test_login">
          Login with test credentials
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
