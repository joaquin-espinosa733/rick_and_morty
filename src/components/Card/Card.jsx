import App from "../../App";


export default function Card(props) {
   return (
      <div>
         
         {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" alt="" /> */}
         <div>
         <button onClick={()=>onClose(id)}>X</button>
         </div>
         <div>
         <h2>{props.name}</h2>
         <h3>{props.status}</h3>
         <h3>{props.species}</h3>
         <h3>{props.gender}</h3>
         <h3>{props.origin}</h3>
         </div>
         <img src={props.image} alt='' /> 
      </div>
   );
}
// namePepe: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.
