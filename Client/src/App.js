import { useState, useEffect } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/NavBar";
import axios from "axios";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/about"
import Login from "./components/login";
import ErrorNotFound from "./components/ErrorNotFound";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "eje@gmail.com";
  const PASSWORD = "@123QWEasd";

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
    // return alert("no es el usuario");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    setAccess(false);
    navigate("/");
  }

  const [characters, setCharacters] = useState([]);
  // console.log(characters)
  // const [title, setTitle] = useState("Bienvenidos");
  const seteandoTitle = (str) => {
    // setTitle(str);
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const char = characters.find((ch) => ch.id === Number(id));
          if (char) return alert("ese characters ya existe");
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  function onClose(id) {
    const newCharacters = characters.filter((ch) => ch.id !== Number(id));
    setCharacters(newCharacters);
  }

  const { pathname } = useLocation();

  return (
    (
      <div className="App">
        {/* <h1>{title}</h1> */}
        {pathname === "/" ? null : (
          <NavBar logout={logout} onSearch={onSearch} />
        )}

        <Routes>
          <Route path="/" element={<Login login={login} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/home"
            element={
              <Cards
                characters={characters}
                onClose={onClose}
                seteandoTitle={seteandoTitle}
              />
            }
          ></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          {/* desde el Link -> /detail/algoMas */}
          {/* --> params => {id:undefined} -->next desde el Link le damos el value =>  {id:algoMas} */}
          <Route path="*" element={<ErrorNotFound />}></Route>
        </Routes>
        {/* {pathname !== "/" &&
      pathname !== "/home" &&
      pathname !== "/about" &&
      pathname.split("/")[1] !== `detail` ? (
        <ErrorNotFound />
      ) : null} */}
      </div>
    )
  );
}

export default App;
// seteandoTitle={seteandoTitle}  //! es de la clase Cards