import React from "react"
import style from './About.module.css'

export default function About(){
    return (
        <div className={style.contenedor} >
            <h1 className={style.titulo} >Acerca del creador:</h1>
            <span className={style.descripcion} >Creado por Leandro Carrizo</span>
        </div>
    )
}