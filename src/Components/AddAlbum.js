import { useState } from "react";
function AddAlbum(props) {
  let [userId, setUserId] = useState("");
  let [photoNo, setPhotoNo] = useState("");
  let [title, setTitle] = useState("");
  let { albums, setAlbums } = props;


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
    albums.unshift(currAlbum);
    setAlbums(albums);
    setUserId("");
    setPhotoNo("");
    setTitle("");
  };
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
export default AddAlbum;
