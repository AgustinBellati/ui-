import react from "react";


export function Header(){
    return(
        <header className="header">
            
        <div className="contenedor" >
            
            <div className="barra">
                <a className="logo" href="/">
                    <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                </a>

                <nav className="navegacion">
                    <a href="nosotros" className="navegacion__enlace">Nosotros</a>
                    <a href="cursos" className="navegacion__enlace">Cursos</a>
                    <a href="contacto" className="navegacion__enlace">Contacto</a>
                </nav>
            </div>
        </div>

        <div className="header__texto" >
            
            <h2 className="no-margin">Blog de café con consejos y cursos</h2>
            <p className="no-margin">Aprende de los expertos con las mejores recetas y consejos</p>
        </div>
      
    </header>
    );
}
export default Header;
