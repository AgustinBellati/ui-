import { useState } from "react";
import react  from "react";
import { useState } from "react";
import { BrowserRouter,Rout,Routes  } from "react-router-dom";
export function pruebapi(){
    const [noticias, setNoticias]=useState([]);

return(
    <div>
        {noticias.map((noticasJSON)=>{
            return(
                <h1>{noticasJSON.titulo}</h1>
            );
        })}
    </div>
);
}