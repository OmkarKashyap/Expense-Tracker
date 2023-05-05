import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import Payments from "./Pages/Payments"
import About from "./Pages/About"
import Footer from "./Components/Footer"
import Dashboard from "./Pages/Dashboard/Dashboard"

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
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App
