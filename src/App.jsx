import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {CarritoPage} from "./pages/CarritoPage";
import { ProductoPage } from "./pages/ProductoPage";


 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage />} />

        <Route path="/carrito" element={<CarritoPage />} />

        <Route path="/productos" element={<ProductoPage />} />




    </Routes>
    </BrowserRouter>
  )
}

export default App;