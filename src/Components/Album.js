import { Link } from "react-router-dom";

function Album(props) {
  const { photoNo, title, albumUser, albums, setAlbums, pos } = props;
  const handleDelete = (e) => {
    const index = e.target.dataset.index - 1;
    albums.splice(index, 1);
    let newAlbums = [...albums];
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
      method: "DELETE",
    });
    setAlbums(newAlbums);
  };

  return (
    <div className="album">
      <div className="albumdetails">
        <h4>Album User - {albumUser}</h4>
        <h4> PhotoNo - {photoNo} </h4>
        Title - {title}
      </div>
      <div>
        <Link to={`/edit-album/${pos - 1}`}>
          <button id="update" data-index={pos}>
            Update
          </button>
        </Link>
        <Link to="/">
          <button id="delete" data-index={pos} onClick={handleDelete}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Album;
