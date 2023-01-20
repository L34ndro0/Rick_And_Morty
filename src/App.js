import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import {useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import Detail from './components/Detail/Detail'

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
    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/cards' element={<Cards/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>
      <div className={style.app}>                    
        <div className={style.contenedor2}>
        <Cards characters={characters} onClose={onClose}/>
        </div  >     
      </div>
    </>
  )

}

export default App
