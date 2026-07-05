import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Go Business
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <button
          type="button"
          className="logout-btn"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;