import { useFetch } from "../hooks/useFetch";
import { useCarritoStore } from "../store/carritoStore";
import { Link } from "react-router-dom";
import styles from "./CardProducto.module.css";

export const CardProducto = () => {

  const {
    data: productos,
    cargando,
    error
  } = useFetch("http://localhost:3000/api/productos");

  const agregarProductos = useCarritoStore(
    (state) => state.agregarProductos
  );

  const listaProductos = Array.isArray(productos)
    ? productos
    : Array.isArray(productos?.productos)
      ? productos.productos
      : [];

  console.log("Productos recibidos:", listaProductos);
  

  if (cargando) {
    return (
      <div>
        <h3>Productos disponibles</h3>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3>Productos disponibles</h3>
        <p>Error al cargar los productos: {error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Productos disponibles:</h2>

      <div className={styles.grid}>

        {listaProductos.length > 0 ? (
          listaProductos.map((producto) => (

            <div className={styles.card} key={producto.id}>

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.imagen}
              />

              <div className={styles.info}>

                <h3>{producto.nombre}</h3>

                <p className={styles.precio}>
                  ${producto.precio}
                </p>

                <Link
                  to={`/productos/${producto.id}`}
                  className={styles.detalle}
                >
                  Ver detalle
                </Link>

                <button
                  onClick={() => agregarProductos({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    imagen: producto.imagen
                  })}
                  className={styles.boton}
                >
                  Agregar al carrito
                </button>

              </div>
            </div>

          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}

      </div>
    </div>
  );
};
