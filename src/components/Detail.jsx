import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import style from "./Detail.module.css"

export default function Detail () {
  
  const {id} = useParams();
  const [character, setCharacter] = useState({});


  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


  return (
    <div className={style.detail}>
      <div className={style.text}>
         <ul className={style.ul}>
         <li>
         <h2>{character.name}</h2>
         </li>
         <li>
         <h2>{character.status}</h2>
         </li>
         <li>
         <h2>{character.species}</h2>
         </li>
         <li>
         <h2>{character.gender}</h2>
         </li>
         <li>
         <h2>{character.origin?.name}</h2>
         </li>
         </ul>
      </div>
   <div className={style.img}>
         <img src={character.image} alt={character.name} />
   </div>
    </div>
  )
}
