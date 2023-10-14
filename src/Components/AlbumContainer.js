import Album from "./Album";

function AlbumContainer({ albums, setAlbums }) {

  if (albums.length === 0) {
    return <h2>Loading... Please Wait</h2>;
  } else {
    return (
      <div className="AlbumContainer">
        {albums.map((currAlbum, index) => (
          <Album
            albums={albums}
            setAlbums={setAlbums}
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            pos={index + 1}
            title={currAlbum.title}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default AlbumContainer;
