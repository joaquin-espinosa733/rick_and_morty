import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id, setId]= useState("");
   
   const handleChange = (event)=>{
      setId(event.target.value)
   };
   const add = ()=>{
      onSearch(id);
      setId("");
   }

   const ramdomChar = ()=>{
      const numRan = Math.floor(Math.random()* 825) + 1;
      onSearch(numRan)
   }
   return (
      <div>
          <input type='search' onChange={handleChange} value={id} name="id" placeholder="insert id..."/>
          <label>insert to id:</label>
         <button onClick={onSearch}>Agregar</button>
         <button onClick={ramdomChar}>personaje random</button>
      </div>
   );
}
