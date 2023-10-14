import { Route, Routes as Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css"
import AlbumContainer from "./Components/AlbumContainer";
import Navbar from "./Components/Navbar";
import AddAlbum from "./Components/AddAlbum";
import EditAlbum from "./Components/EditAlbum";
function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const jsonData = await response.json();
        setAlbums(jsonData);
        // console.log(jsonData);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route
          path="/"
          element={<AlbumContainer albums={albums} setAlbums={setAlbums} />}
        />
        <Route
          path="/addAlbum"
          element={<AddAlbum albums={albums} setAlbums={setAlbums} />}
        />
        <Route
          path="/edit-album/:pos"
          element={<EditAlbum albums={albums} setAlbums={setAlbums} />}
        />
      </Switch>
    </div>
  );
}

export default App;
