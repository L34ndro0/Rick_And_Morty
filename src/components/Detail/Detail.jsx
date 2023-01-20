import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'


export default function Detail(){
    const {detailId} = useParams()
    const [character,setCharacter] = useState()
    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={style.contenedor}>
            <div>
                <h1>{character?.name} </h1>
                <label >ESTATUS</label>
                <h3>{character?.status} </h3>
                <label >ESPECIES</label>
                <h3>{character?.species} </h3>
                <label >GENERO</label>
                <h3>{character?.gender} </h3>
                <label >ORIGEN</label>
                <h3>{character?.origin?.name} </h3>
                <Link to={"/"} >
                <button>Home</button>
                </Link>
            </div>
            <div>
                <img className={style.imagen} src={character?.image} alt="" />
            </div>
        </div>
    )
} 