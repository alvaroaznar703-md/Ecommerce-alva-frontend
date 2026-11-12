import { Link } from "react-router-dom"
import { Carrito } from "../Components/Carrito"
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"


export const CarritoPage = () => {
  return (
    <>
        <Header />

        <div style={{backgroundColor:"antiquewhite",}}>
            <h2 style={{fontFamily:"sans-serif", fontSize:"1.4 rem", textAlign:"center",paddingTop:"2rem"}}>Mi Carrito</h2>
            <Link style={{textDecoration:"none"}} to="/productos">← SEGUIR COMPRANDO</Link>

            <Carrito />

        </div>

        <Footer />




    </>
  )
}

