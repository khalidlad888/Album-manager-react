import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul id="navItem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <h1>Album Manager</h1>
        </li>
        <li>
          <Link to="/addAlbum">Add Album</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
