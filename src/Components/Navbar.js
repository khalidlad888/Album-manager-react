//importing link from react-router-dom
import { Link } from "react-router-dom";

//Navbar component
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-items">
        <h1>Album List</h1>
        <ul id="navList">
          <li>
            {/* Link to go to Home */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Link to go to Add Album component */}
            <Link to="/addAlbum">Add Album</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

//exporting Navbar component
export default Navbar;