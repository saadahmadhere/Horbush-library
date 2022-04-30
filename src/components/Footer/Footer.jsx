import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive && "#ff0000" };
        }}>
        <i className="fas fa-compass mr_1 mb_1"></i>Explore
      </NavLink>
      <NavLink
        to="/playlist"
        style={({ isActive }) => {
          return { color: isActive && "#ff0000" };
        }}>
        <i className="fas fa-folder-plus mr_1 mb_1"></i>Playlist
      </NavLink>
      <NavLink
        to="/liked"
        style={({ isActive }) => {
          return { color: isActive && "#ff0000" };
        }}>
        <i className="fas fa-thumbs-up mr_1 mb_1"></i>Liked
      </NavLink>
      <NavLink
        to="/watch-later"
        style={({ isActive }) => {
          return { color: isActive && "#ff0000" };
        }}>
        <i className="fas fa-bookmark mr_1 mb_1"></i>Watch Later
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => {
          return { color: isActive && "#ff0000" };
        }}>
        <i className="fas fa-history mr_1 mb_1"></i>History
      </NavLink>
    </footer>
  );
};

export { Footer };
