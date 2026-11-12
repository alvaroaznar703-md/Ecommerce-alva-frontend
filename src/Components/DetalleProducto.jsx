import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./DetalleProducto.module.css";

export const DetalleProducto = () => {

const { id } = useParams();
 const navigate = useNavigate();

const {data, cargando, error}= useFetch(`http://localhost:3000/api/productos/${id}`)
const producto = data?.producto;

 if (cargando){
        return(
             <div>
        <h3>Cargando producto</h3>
        <p>Cargando...</p>
             </div>

        );
    }
   if (error){
        return(
             <div>
        <h3>Error al cargar producto</h3>
        <p>No se pudo obtener el producto.</p>
        <Link to="/productos">Volver</Link>
             </div>

        );
  
}
if (!producto) {
        return (
            <div>
                <h3>Producto no encontrado</h3>
                <Link to="/productos">Volver</Link>
            </div>
        );
    }
return (
    <div className={styles.contenedor}>

        <img
            className={styles.imagenDetalle}
            src={`http://localhost:3000${producto.imagen}`}
            alt={producto.nombre}
        />

        <div>
            <h1 className={styles.titulo}>
                {producto.nombre}
            </h1>

            <p className={styles.parrafo}>
                {producto.descripcion}
            </p>

            <h2 className={styles.titulo}>
                ${producto.precio}
            </h2>

            <p className={styles.parrafo}>Stock disponible: {producto.stock}</p>

            <Link className={styles.link} to="/productos">
                ← Volver a productos
            </Link>

            <button
                className={styles.boton}
                onClick={() => navigate("/compra")}
            >
                Comprar
            </button>
        </div>

    </div>
);
}
