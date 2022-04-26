import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <h1 className="logo_text txt_semibold">wisdom</h1>
        </div>

        <ul className="navbar_links flex list_style_none">
          <li className="ml_8">
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
