import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Helper/Auth/auth-context";
import { logout } from "../../Helper";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    userState: {
      token,
      user: { firstName },
    },
    dispatchUserState,
  } = useAuth();

  const logoutHandler = () => {
    logout(dispatchUserState, navigate);
  };

  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <Link to="/">
            <div className=" logo_text txt_boldest">wisdom</div>
          </Link>
        </div>
        <div className="navbar_search flex">
          <input
            className="search_box"
            type="search"
            placeholder="Search for products here"
          />
          <button className="btn">
            <span className="material-icons outlined">search</span>
          </button>
        </div>

        <ul className="navbar_links flex list_style_none">
          <li>
            {token ? (
              <div className="flex">
                <span className="txt_sm">Hi, {firstName}</span>
                <button className="btn btn_outline" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn">
                <i className="fas fa-user-circle fa-2x"></i>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
