import react from "react";

export function EntradaCurso(props){
    return( 
             <li class="widget-curso">
        <h4 class="no-margin">{props.titulo}</h4>
    <p class="widget-curso__label">Precio: 
        <span class="widget-curso__info">{props.precio}</span>
    </p>
    <p class="widget-curso__label">Cupo: 
        <span class="widget-curso__info">{props.cupo}</span>
    </p>
    <a href="entrada" class="boton boton--secundario">Más Información sobre nuestros cursos</a>
                 </li>
    );
}