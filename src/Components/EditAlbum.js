//importing react and other hooks
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//functional component EditAlbum
const EditAlbum = (props) => {
  //getting position from params and using useNavigate hook
  const { position } = useParams();
  const navigate = useNavigate();

  //getting albums from props
  let { albums, setAlbums } = props;

  //setting new user id in state
  let [newUserId, setNewUserId] = useState("");
  let [newAlbumTitle, setNewAlbumTitle] = useState("");

  //function to handle edit button
  const handleEdit = (e) => {
    e.preventDefault();

    albums[position].userId = newUserId;
    albums[position].title = newAlbumTitle;
    let newAlbums = [...albums];

    fetch(`https://jsonplaceholder.typicode.com/albums/${position + 1}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: newAlbumTitle,
        userId: newUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setAlbums(newAlbums);
    navigate(`/`);
  };

  return (
    <div className="edit-album">
      <form onSubmit={handleEdit} className="form-field">
        <label>Update User Id: </label>
        <input
          placeholder={albums[position].userId}
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <label>Update Album Title: </label>
        <input
          placeholder={albums[position].title}
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <button type="submit" onClick={handleEdit}>
          Update
        </button>
      </form>
    </div>
  );
};

//exporting EditAlbum component
export default EditAlbum;