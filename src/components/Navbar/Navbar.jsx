import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
            <button className="btn">
              <i className="fas fa-user-circle fa-2x"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
