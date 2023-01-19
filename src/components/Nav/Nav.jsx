import React from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function Nav(props){
    const onSearch = props.onSearch
    return(
        <div >
            <SearchBar onSearch={onSearch} />
        </div>
    )
} 