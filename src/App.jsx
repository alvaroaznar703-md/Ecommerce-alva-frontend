import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import {CarritoPage} from "./pages/CarritoPage";
import { ProductoPage } from "./pages/ProductoPage";
import { DetallePage } from "./pages/DetallePage";
import { CompraPage } from "./pages/CompraPage";



 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage />} />

        <Route path="/carrito" element={<CarritoPage />} />

        <Route path="/productos" element={<ProductoPage />} />

        <Route path="/productos/:id" element={<DetallePage />} />

        <Route path="/compra" element={<CompraPage />} />



    </Routes>
    </BrowserRouter>
  )
}

export default App;