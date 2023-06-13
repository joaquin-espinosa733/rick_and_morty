import Card from '../Card/Card';
import style from "../Cards/Cards.module.css"

export default function Cards({characters, onClose}) {
   console.log(characters)

  return (
    <div className={style.cardsContainer}>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}/>
         })
      }
    </div>
  );
}
