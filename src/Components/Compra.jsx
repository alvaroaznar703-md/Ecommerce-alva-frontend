import { useState } from "react";
import { useCarritoStore } from "../store/carritoStore";
import styles from "./Compra.module.css";

export const Compra = () => {

    const [compraFinalizada, setCompraFinalizada] = useState(false);
     const vaciarCarrito = useCarritoStore(
        (state) => state.vaciarCarrito
    );

    const finalizarCompra = (e) => {
        e.preventDefault();
        vaciarCarrito();
        setCompraFinalizada(true);
    };

    if (compraFinalizada) {
        return (
            <div className={styles.exito}>
                <h1>¡Compra realizada correctamente!</h1>
                <p>Gracias por confiar en nosotros.</p>
            </div>
        );
    }

    return (
        <div className={styles.contenedor}>

            <h1 className={styles.titulo}>
                Finalizar compra
            </h1>

            <form
                className={styles.formulario}
                onSubmit={finalizarCompra}
            >

                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    required
                />

                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    placeholder="Ingrese su apellido"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingrese su email"
                    required
                />

                <label>Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    placeholder="Ingrese su dirección"
                    required
                />

                <label>Ciudad</label>
                <input
                    type="text"
                    name="ciudad"
                    placeholder="Ingrese su ciudad"
                    required
                />

                <label>Medio de pago</label>

                <select name="pago" required defaultValue="">
                    <option value="" disabled>
                        Seleccione un medio de pago
                    </option>

                    <option value="Tarjeta de crédito">
                        Tarjeta de crédito
                    </option>

                    <option value="Tarjeta de débito">
                        Tarjeta de débito
                    </option>

                    <option value="Transferencia mercado pago">
                        Transferencia mercado pago
                    </option>

                    <option value="Efectivo">
                        Efectivo
                    </option>
                </select>

                <button type="submit">
                    Comprar
                </button>

            </form>

        </div>
    );
};
