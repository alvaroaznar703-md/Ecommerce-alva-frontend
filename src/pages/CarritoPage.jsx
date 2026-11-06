import { Link } from "react-router-dom"
import { Carrito } from "../Components/Carrito"
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"


export const CarritoPage = () => {
  return (
    <>
        <Header />

        <div>
            <h2>Mi Carrito</h2>
            <Link to="/productos">← Seguir comprando</Link>

            <Carrito />

        </div>

        <Footer />




    </>
  )
}

