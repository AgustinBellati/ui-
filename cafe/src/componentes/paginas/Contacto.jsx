// import { application } from "express";
import react  from "react";
import { api } from "../../api/api";

import { useState } from "react";
import { BrowserRouter,Rout,Routes  } from "react-router-dom";
// import { response } from "express";
export function Contacto(){
    const [nombre,setNombre]=useState("");
    const [email,setEmail]=useState("");
    const [mensaje,setMensaje]=useState("");
    const [loading,setLoading]=useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
        //cambiar el estado para que se cambie el boton
        setLoading(true)
        //no usa multer porque no manda fotos :P
        // llamar un post con axios 
        api.post('/contact',{
            nombre:nombre,
            email:email,
            mensaje:mensaje
        }).then((response)=>{
            console.log(response);
            //cambiar el estado del boton de nuevo
            setLoading(false);
        },
        //si da error cambiar el estado del boton
        ()=> {setLoading(false);});
       
        setEmail("");
        setNombre("");
        setMensaje("");
    };
    const handleNombreChange=(event)=>{
        setNombre(event.target.value);
    }
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    const handleMensajeChange=(event)=>{
        setMensaje(event.target.value);
    }
    return(
    
   
    
    <main class="contenedor">
    <h3 class="centrar-texto">Contacto</h3>

    <div class="contacto-bg"></div>

    <form class="formulario" onSubmit={handleSubmit}>
        <div class="campo">
            <label class="campo__label" for="nombre">Nombre</label>
            <input 
                 value={nombre}
                 onChange={handleNombreChange}
                class="campo__field"
                type="text" 
                placeholder="Tu Nombre" 
            />
        </div>
        <div class="campo">
            <label class="campo__label" for="email">E-mail</label>
            <input 
                value={email}
                 onChange={handleEmailChange}
                className="campo__field"
                type="email" 
                placeholder="Tu E-mail" 
                id="email"
            />
        </div>
        <div class="campo">
            <label class="campo__label" for="mensaje">Mensaje</label>
            <textarea 
                 value={mensaje}
                onChange={handleMensajeChange}
                className="campo__field campo__field--textarea"
                id="mensaje"
            ></textarea>
        </div>

        <div class="campo">
            <input type="submit" value={loading? "cargando...":"enviar"} class="boton boton--primario"/>
                
        </div>
    </form>
    
      
    
 
    
</main>);
}