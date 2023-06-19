import { useState, useEffect } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/NavBar";
import axios from "axios";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/about"
import Login from "./components/login";


function App() {
  
  
  
  // function logout(){
  //   setAccess(false);
  //   navigate("/");
  // }
  
  const [characters, setCharacters] = useState([]);


  function onSearch(id) {
    try {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            const char = characters.find((ch) => ch.id === Number(id));
            if (char) return alert("¡Ese personaje ya existe!");
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    } catch (error) {
      console.log("Error:", error);
      // Puedes realizar un manejo adicional del error si lo deseas
    }
  }
  
  
  function onClose(id) {
    const newCharacters = characters.filter((ch) => ch.id !== Number(id));
    setCharacters(newCharacters);
  }

  const {pathname} = useLocation();


  return (
    <div className="App">
      {/* <h1>{title}</h1> */}
      {pathname === "/" ? null : (
          <NavBar onSearch={onSearch} />
        )}
      
      
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}> </Route>
        <Route path="/Detail/:id" element={<Detail/>}> </Route>
      </Routes>


    </div>
  );
}

export default App;
// seteandoTitle={seteandoTitle}  //! es de la clase Cards