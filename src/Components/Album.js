//importing link from react-router-dom
import { Link } from "react-router-dom";

//functional component Album
//Receiving data through props
function Album(props) {
  const { photoNo, title, albumUser, albums, setAlbums, position } = props;

  //dummy delete function i.e., deleting from **state only
  const handleDelete = (e) => {
    const index = e.target.dataset.index - 1;
    albums.splice(index, 1);
    let newAlbums = [...albums];
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
      method: "DELETE",
    });
    //setting updated album as state
    setAlbums(newAlbums);
  };

  return (
    <div className="album">
      <div className="albumdetails">
        <h4>Album User - {albumUser}</h4>
        <h4> Photo No - {photoNo} </h4>
        Title - {title}
      </div>
      <div>
        <Link to={`/edit-album/${position - 1}`}>
          <button id="update" data-index={position}>
            Update
          </button>
        </Link>
        <Link to="/">
          <button id="delete" data-index={position} onClick={handleDelete}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

//exporting Album component
export default Album;