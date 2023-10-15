//importing react and hooks
import React, { useState, useEffect } from "react";
//importing routes from react-router-dom
import { Route, Routes as Switch } from "react-router-dom";
//importing css
import "./App.css";
//importing components
import AlbumContainer from "./Components/AlbumContainer";
import Navbar from "./Components/Navbar";
import AddAlbum from "./Components/AddAlbum";
import EditAlbum from "./Components/EditAlbum";

//function for app component
function App() {
  //setting state
  const [albums, setAlbums] = useState([]);

  //useEffect hook to fetch API
  useEffect(() => {
    //function to fetch API
    const fetchApi = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const Data = await res.json();
        //setting data in state
        setAlbums(Data);
        // console.log(Data);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };
    //calling function
    fetchApi();
  }, []);


  return (
    <div className="App">
      <Navbar />

      {/* Using switch from react-router-dom to use multiple routes and display components */}
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
          path="/edit-album/:position"
          element={<EditAlbum albums={albums} setAlbums={setAlbums} />}
        />
      </Switch>
    </div>
  );
}

//exporting app component
export default App;