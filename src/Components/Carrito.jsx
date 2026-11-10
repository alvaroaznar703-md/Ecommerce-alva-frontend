import {useCarritoStore} from "../store/carritoStore";
import styles from "./Carrito.module.css";

export const Carrito = () => {
 const items= useCarritoStore((state)=>state.items);
 const eliminarProducto= useCarritoStore((state)=>state.eliminarProducto);
 const actualizarCantidad=useCarritoStore((state)=>state.actualizarCantidad);
 const vaciarCarrito=useCarritoStore((state)=>state.vaciarCarrito);
 const getTotalItems=useCarritoStore((state)=>state.getTotalItems);
 const getTotalPrecio=useCarritoStore((state)=>state.getTotalPrecio);

if (items.length ===0 ){
 <div>
 <h3 className={styles.titulo3}>🛒︎ Tu Carrito</h3>
 <p className={styles.parrafo}>El carrito esta vacio</p>
</div>
}

return(
<div>
<h3 className={styles.titulo3}>
 🛒
 <span className={styles.contador}>
 {getTotalItems()}
 </span>
</h3>
<div className={styles.contenido}>
{items.map((item) => (
 <div key={item.id}>
  
 <h3 className={styles.titulo}>{item.nombre}</h3>
 <strong className={styles.precio}>Precio: ${item.precio}</strong>
 <button className={styles.boton1} onClick={()=>actualizarCantidad(item.id, item.cantidad - 1 )}> - </button>
 <span>{item.cantidad}</span>
 <button className={styles.boton1} onClick={()=>actualizarCantidad(item.id, item.cantidad + 1 )}> + </button><br></br>
 <span>{item.cantidad * item.precio}</span><br></br>
 <button className={styles.eliminar} onClick={()=> eliminarProducto(item.id)}> 🗑️ </button>

 </div>
))}
<div>
 <strong className={styles.precio}>Total: ${getTotalPrecio()}</strong>

</div>
<button className={styles.botondos} onClick={vaciarCarrito}>Vaciar Carrito</button>
 <button className={styles.botondos} onClick={() => navigate("/compra")}>
          Comprar
        </button>
        <br></br>
        

</div>
</div>
)

}

