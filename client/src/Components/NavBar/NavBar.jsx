import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserRole,
  userLogOut,
} from "../../redux/Actions/Users/usersActions";
import { CartContext } from "../../contexts/ShoppingCartContext";
import imagelogo from "../../assets/logo/Logo.png";
import style from "./Navbar.module.css";
import { Modal } from 'antd';

const NavBar = ({ userId, userImage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [login, loginState] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const token = sessionStorage.getItem("jwt_session");
  const userRole = useSelector((state) => state.userRole);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt_session");
    if (token) {
      loginState(false);
    }
  }, [location]);

  const [modalVisible, setModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const showConfirmModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleLogout = () => {
    showConfirmModal();
  };

  const confirmLogout = () => {
    setModalVisible(false);
    sessionStorage.removeItem("jwt_session");
    dispatch(createUserRole(""));
    dispatch(userLogOut());
    loginState(true);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className={style.stickyNavbar}>
      <nav className={`navbar navbar-expand-md navbar-light ${style.navbar}`}>
        <div className="container">
          <Link to="/" className={style.navbar_brand}>
            <img
              src={imagelogo}
              className={style.nav_logo}
              width="60"
              alt="Logo de la página"
            />
          </Link>

          <button
            className={`navbar-toggler ${style.navbar_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${style.navbar_collapse} collapse navbar-collapse justify-content-between`}
            id="navbarNav"
          >
            <ul className={`navbar-nav ${style.navbar_nav}`}>
              <li className={style.nav_item}>
                <a className={style.nav_link} onClick={() => navigate("/")}>
                  Home
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  className={style.nav_link}
                  onClick={() => navigate("/store")}
                >
                  Tienda
                </a>
              </li>
              <li className={style.nav_item}>
                <a
                  className={style.nav_link}
                  onClick={() => navigate("/about")}
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
            <div className={`d-flex ${login ? "" : "always-visible"}`}>
              {login ? (
                <>
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => navigate("/loginRegister")}
                  >
                    Ingresar
                  </button>
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => navigate("/loginRegister")}
                  >
                    Registrarse
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`btn cart always-visible ${style.btn}`}
                    type="submit"
                  >
                    {login ? (
                      <Link to={`/accountDetail/${userId}`}>
                        (<img src={userImage} />)
                      </Link>
                    ) : (
                      <Link to={`/accountDetail/${userId}`}>
                        <i
                          className={`bi bi-person-circle ${style.custom_icon}`}
                        ></i>
                      </Link>
                    )}
                  </button>
                  {userRole === "ADMIN" && (
                    <Link to={"/admin"}>
                      <button className={`btn btn-sm ${style.btn}`}>
                        ADMIN
                      </button>
                    </Link>
                  )}
                  <button
                    className={`btn btn-sm ${style.btn}`}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </>
              )}
              <button
                onClick={handleCart}
                className={`btn cart ${style.btn} btn-primary position-relative`}
                type="submit"
              >
                <i className="bi bi-cart"></i>
                <span
                  className={`position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2 ${
                    quantity > 0 ? "visible" : "invisible"
                  }`}>
                  <span className="visually-hidden">mensajes no leídos</span>
                  {quantity > 0 && <span>{quantity}</span>}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal
        title="¿Estás seguro?"
        visible={modalVisible}
        onOk={confirmLogout}
        onCancel={handleCancel}
      >
        <p>
          Se cerrará la sesión. ¿Estás seguro?
        </p>
      </Modal>
    </div>
  );
};

export default NavBar;
