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
        <h3>🛒︎ Tu Carrito</h3>
        <p>El carrito esta vacio</p>
    </div>
}

return(
<div>
<h3 className={styles.tituloCarrito}>
  🛒 Tu carrito
  <span className={styles.contador}>
    {getTotalItems()}
  </span>
</h3>
{items.map((item) => (
  <div key={item.id}>
    <h3>{item.nombre}</h3>
    <strong>Precio: ${item.precio}</strong>
    <button onClick={()=>actualizarCantidad(item.id, item.cantidad - 1 )}> - </button>
    <span>{item.cantidad}</span>
    <button onClick={()=>actualizarCantidad(item.id, item.cantidad + 1 )}> + </button>
    <span>{item.cantidad * item.precio}</span>
    <button onClick={()=> eliminarProducto(item.id)}> 🗑️ </button>

  </div>
))}
<div>
    <strong>Total: ${getTotalPrecio()}</strong>

</div>
<button onClick={vaciarCarrito}>Vaciar Carrito</button>
</div>

)

}

