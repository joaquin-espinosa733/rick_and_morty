// import { useEffect } from "react";
import style from "../Card/Card.module.css"
import { Link } from "react-router-dom";


export default function Card({char, onClose}) { // obj
   const {id,name,gender,species,origin,image,status} = char


   return (
      <div className={style.container}>
         <div className={style.boton}>
         <button onClick={()=>onClose(id)}>X</button>
         </div>
         <div className={style.dataContainer}>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <Link>
         <img src={image} alt={name} />
         </Link>
         </div>
      </div>
   );
}
