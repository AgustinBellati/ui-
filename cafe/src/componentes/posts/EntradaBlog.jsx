import reactDom from "react-dom";
import react from "react";

export function EntradaBlog(props){
    return(
        <article class="entrada">
        <div class="entrada__imagen">
          
        </div>

        <div class="entrada__contenido">
            <h4 class="no-margin">{props.titulo}</h4>
            <p>{props.contenidoBlog}</p>
            <a href="entrada " class="boton boton--primario">Leer Entrada</a>
        </div>
    </article>
    );
}