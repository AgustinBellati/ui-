
import react, { useEffect } from "react";
import { BrowserRouter,Rout,Routes  } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { EntradaBlog } from "../posts/EntradaBlog";
import { EntradaCurso } from "../posts/EntradaCurso";
import { Entrada } from "./Entrada";

export function Contenido(){
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/blogs").then((response) => {
        setBlogs(response.data);
        
      });
    }, []);
  
    const blogsList = blogs.map(function (blog) {
      return (
      <EntradaBlog key={blog.id} titulo={blog.titulo} contenidoBlog={blog.contenidoBlog} />
      );
    });
    return   ( 
       
        
    <div>
         <div class="contenedor contenido-principal">
        <main class="blog">
            <h3>Nuestro Blog</h3>

         
      <div>{blogsList}</div>
    
        </main>
        <aside class="sidebar">
            <h3>Nuestros Cursos y Talleres</h3>
    
            <ul class="cursos no-padding">
            <EntradaCurso titulo="curso 1" precio="150" cupo="40"/>
            <EntradaCurso titulo="curso 2" precio="100" cupo="0"/>
           
               
                
            </ul>
        </aside>
    </div>

    </div>

    );
}

export default Contenido;
