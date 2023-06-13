import style from "../Card/Card.module.css"


export default function Card({char, onClose}) { // obj
   const {id,name,gender,species,origin,image,status} = char
   return (
      <div className={style.container}>
         <div className={style.boton}>
         <button onClick={()=>onClose(id)}>X</button>
         </div>
         <div className={style.dataContainer}>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />
         </div>
      </div>
   );
}
// namePepe: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.
