import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

export const Header = () => {

 const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className={styles.header}>

        <h1 className={styles.titulo}>Mi E-commerce: Tecnologia.</h1>

         <button className={styles.menuBtn} onClick={() => setMenuAbierto(!menuAbierto)}> ☰ </button>

         {menuAbierto && (
                <nav className={styles.nav}>
                    <Link className={styles.link} to="/" onClick={() => setMenuAbierto(false)}>
                        Inicio
                    </Link>

                    <Link className={styles.link} to="/productos" onClick={() => setMenuAbierto(false)}>
                        Productos
                    </Link>

                    <Link className={styles.link} to="/contacto" onClick={() => setMenuAbierto(false)}>
                        Contactos
                    </Link>

                    <Link className={styles.link} to="/carrito" onClick={() => setMenuAbierto(false)}>
                        Carrito
                    </Link>
                </nav>
            )}


    </div>
  )
}

