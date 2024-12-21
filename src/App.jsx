import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./Components/counter"
import ProductList from "./Components/Productlist"
import Header from "./Components/Header"
import Cart from "./Components/Cart"

function App() {

  return (
    <BrowserRouter>

      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App