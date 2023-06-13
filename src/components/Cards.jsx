import Card from '../components/Card/Card';

export default function Cards({characters, onClose}) {
   console.log(characters)
  return (
    <div>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}/>
         })
      }

      {/* id={Rick.id}
      name={Rick.name}
      status={Rick.status}
      species={Rick.species}
      gender={Rick.gender}
      origin={Rick.origin.name}
      image={Rick.image}
      onClose={() => window.alert("Emulamos que se cierra la card")} */}
    </div>
  );
}
