//importing useState hook
import { useState } from "react";

//functional component to add album
function AddAlbum(props) {
  //using state to make dummy calls
  let [userId, setUserId] = useState("");
  let [photoNo, setPhotoNo] = useState("");
  let [title, setTitle] = useState("");
  //receiving data through props
  let { albums, setAlbums } = props;

  //handle add function
  const handleAddAlbum = (e) => {
    e.preventDefault();
    const currAlbum = {
      userId: userId,
      id: photoNo,
      title: title,
    };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(currAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
    // .then((json) => console.log(json));
    //using unshift to add album at the start
    albums.unshift(currAlbum);
    //setting state components
    setAlbums(albums);
    setUserId("");
    setPhotoNo("");
    setTitle("");
  };

  //returning form comp and add album button
  return (
    <div className="addAlbum">
      <h1>Create Album</h1>
      <form className="form-field" onSubmit={handleAddAlbum}>
        <label>User Id: </label>
        <input
          type="text"
          placeholder="Enter userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>Photo No: </label>
        <input
          type="text"
          placeholder="Enter Photo No."
          value={photoNo}
          onChange={(e) => setPhotoNo(e.target.value)}
        />
        <label>Album Title: </label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="btn-container">
          <button className="add-album-btn">Add Album</button>
        </div>
      </form>
    </div>
  );
}

//exporting addalbum component
export default AddAlbum;