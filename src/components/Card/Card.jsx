import React from "react";
import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.div}>
         <button className={style.cerrar} onClick={props.onClose}>X</button>
         <h2 className={style.name}>{props.name}</h2>
         <h2 className={style.species}>{props.species}</h2>
         <h2 className={style.gender}>{props.gender}</h2>
         <img  src={props.image} alt={props.name} /> 
      </div>
   );
}
