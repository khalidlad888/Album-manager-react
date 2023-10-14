import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditAlbum = (props) => {
  const { pos } = useParams();
  const navigate = useNavigate();

  let { albums, setAlbums } = props;

  let [newUserId, setNewUserId] = useState("");
  let [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();

    albums[pos].userId = newUserId;
    albums[pos].title = newAlbumTitle;
    let newAlbums = [...albums];

    fetch(`https://jsonplaceholder.typicode.com/albums/${pos + 1}`, {
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
          placeholder={albums[pos].userId}
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <label>Update Album Title: </label>
        <input
          placeholder={albums[pos].title}
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

export default EditAlbum;