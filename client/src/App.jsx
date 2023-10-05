import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FormProduct from "./components/FomProducto/FormProduct";
import FormUser from "./components/FormUser/FormUser";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import LoginRegister from "./views/LoginRegister/LoginRegister";
import AccountDetail from "./views/AccountDetail/AccountDetail";
import Store from "./views/Store/Store";
import Detail from "./views/Detail/Detail";
import Faq from "./views/Faq/faq";
import Privacy from "./views/PrivacyP/Privacy";
import Users from "./views/Users/Users";
import Sales from "./views/Sales/Sales";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Carrito from "./views/Carrito/Carrito";
import Error from "./components/Error/Error";
import { ShoppingCartProvider } from "./context/context-provider";

// CONSULTAR RUTAS DEFINIDAS POR EL BACK - PDTE AJUSTAR!!

const App = () => {
  return (
    <ShoppingCartProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formProduct" element={<FormProduct />}></Route>
          <Route path="/formUser" element={<FormUser />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/accountDetail/:id" element={<AccountDetail />} />
          <Route path="/store" element={<Store />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/politica-de-privacidad" element={<Privacy />} />

          <Route path="/adminLogin" element={<LoginRegister />} />
          <Route path="/adminStore" element={<Store />} />
          <Route path="/adminUsers" element={<Users />} />
          <Route path="/adminSales" element={<Sales />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
