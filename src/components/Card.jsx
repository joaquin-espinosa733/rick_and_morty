import App from "../App";

export default function Card({element, onClose}) {
   const {id, name, status, species, gender, origin, image} = element
   
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{id}</h2>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
