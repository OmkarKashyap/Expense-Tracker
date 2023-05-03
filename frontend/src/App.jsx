import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import Payments from "./Pages/Payments"
import About from "./Pages/About"

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
