import {useState} from 'react'

export default function SearchBar(props) {
   const [character,setCharacter] = useState() 

   return (
     <div>
        <input type='search' onChange={event => setCharacter(event.target.value)}/>
        <button onClick={()=> props.onSearch(character)} >Agregar</button>
        
     </div>
  );
}