import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from 'react'

function App () {
  const [characters,setCharacters] = useState([])
   
  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      }); 
    
  }

  const onClose = (id) => {
   
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className={style.app}>    
      
      <div className={style.contenedor3}>  
      <Nav onSearch={onSearch} />
      </div>               
      <div className={style.contenedor2}>
      <Cards
        characters={characters} onClose={onClose}
      />
      </div  >     
    </div>
  )
}

export default App
