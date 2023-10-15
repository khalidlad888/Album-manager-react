//importing album component
import Album from "./Album";

//functional component AlbumContainer
//receiving state from props
function AlbumContainer({ albums, setAlbums }) {

  //if state is empty show loading...
  if (albums.length === 0) {
    return <h2>Loading... Please Wait</h2>;
  } else {
    return (
      <div className="AlbumContainer">
        {albums.map((currAlbum, index) => (
          //returning Album component and sending data through props
          <Album
            albums={albums}
            setAlbums={setAlbums}
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            position={index + 1}
            title={currAlbum.title}
            key={index}
          />
        ))}
      </div>
    );
  }
}

//exporting AlbumContainer
export default AlbumContainer;