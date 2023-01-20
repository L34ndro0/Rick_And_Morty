import React from "react";
import {Link} from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'


export default function Nav(props){
    const onSearch = props.onSearch
    return(
        <div className={style.contenedor} >
            <Link to='/About' >About</Link>
            <Link to=''>Home</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
} 