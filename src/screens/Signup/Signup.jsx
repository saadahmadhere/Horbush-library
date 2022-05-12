import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="signUp flex_col flex_align__center pt_8 mb_10">
      <h1 className="h1 ">Sign Up</h1>
      <form className="flex_col">
        <label htmlFor="fName" className="label  field_required">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          className="input block"
          placeholder="John"
          autoFocus
          required
        />
        <label htmlFor="lName" className="label  field_required">
          Last Name
        </label>
        <input
          type="text"
          id="lName"
          className="input block"
          placeholder="Wick"
          required
        />
        <label htmlFor="email" className="label  field_required">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="sheldon@tbbt.com"
          className="input block"
          required
        />
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
        <label htmlFor="confirmPassword" className="label  field_required">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="input block"
          placeholder="Confirm password"
          required
        />
        <div className="input_container">
          <input type="checkbox" id="check_box" required />
          <label htmlFor="check_box" className="label field_required">
            I agree to the terms of service.
          </label>
        </div>
        <button className="btn btn_primary btn_sm btn_signup">Signup</button>
        <Link to="/login" className="txt_regular">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export { Signup };
