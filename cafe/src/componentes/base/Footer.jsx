import react from "react";
export function Footer(){
    return(
        <footer class="footer">
        <div class="contenedor">
            <div class="barra">
                <a class="logo" href="index.html">
                    <h1 class="logo__nombre no-margin centrar-texto">Blog<span class="logo__bold">DeCafé</span></h1>
                </a>

                <nav class="navegacion">
                    <a href="nosotros" class="navegacion__enlace">Nosotros</a>
                    <a href="cursos" class="navegacion__enlace">Cursos</a>
                    <a href="contacto" class="navegacion__enlace">Contacto</a>
                </nav>
            </div>
        </div>
    </footer>
    );
}