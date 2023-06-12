import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div>
      {
            characters && characters.map((element)=>{
                  return <Card key={element.id} characters={element} onClose={onClose}/>
            })
      }
         {/* <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> */}
   </div>;
}
