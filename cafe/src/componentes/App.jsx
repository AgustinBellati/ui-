import Header from './base/Header'
import contenido, { Contenido } from './paginas/Contenido'
import cursos, { Cursos } from './paginas/Cursos'
import nosotros, { Nosotros } from './paginas/Nosotros'
import contacto, { Contacto } from './paginas/Contacto'
import entrada, { Entrada } from './paginas/Entrada'
import footer, { Footer } from './base/Footer'
import { Route, Routes } from 'react-router-dom';

import axios from "axios";
import { useState } from 'react'


export function App(){


 
    return(
        <>
<Routes>
    <Route path="/" element={[<Header/>, <Contenido/>,
    <Footer/>
    ]}/>
  <Route path="cursos" element={[<Header/>, <Cursos/>,
    <Footer/>
    ]}/>
   <Route path="nosotros" element={[<Header/>, <Cursos/>,
    <Footer/>
    ]}/>
  <Route path="contacto" element={[<Header/>, <Contacto/>,
    <Footer/>
    ]}/>
    <Route path="entrada" element={[<Header/>, <Entrada/>,
    <Footer/>
    ]}/>
</Routes>
        </>
    );
}