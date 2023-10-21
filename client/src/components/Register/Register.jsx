import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserRole, setUser } from "../../redux/Actions/Users/usersActions";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import style from './Register.module.css';
import { validateRegister } from "../../Validate/Validate";

const Register = ({ toggleComponent }) => {
  const navigate = useNavigate();
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setInput1(!input1)
  };
  const togglePasswordVisibility2 = () => {
    setInput2(!input2)
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    celular: "",
    address: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    celular: "",
    address: "",
    password: "",
    passwordConfirmation: "",
  });

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({...data, [name]:value})
        const newErrors = validateRegister({
            ...data,
            [name]: value,
        })
            setErrors(newErrors)
    };


    const dispatch = useDispatch()


    //
    // USO, LO MISMO QUE EN EL LOGIN, UN DISPATCH CON LA ACTION setUser
    // PARA EVITAR DECODIFICAR EL TOKEN Y TENER QUE HACER OTRA REQUEST AL BACK
    //
    const register = (ev) => {
        ev.preventDefault();

        axios.post("https://pf-back-deploy.onrender.com/users", data)
            .then(res => {
                const {id, email, name, rol, celular, address, token} = res.data
                sessionStorage.setItem("jwt_session", token)
                dispatch(createUserRole(rol));
                dispatch(setUser({id, email, name, rol, celular, address}));
                navigate("/")
            })
            .catch(error => alert(error.response.data.error))
    };
    
    return(
        <div className="container">
            <h3 className='fw-bold text-center pt-3'>Crear nueva cuenta</h3>
            <form onSubmit={register} className="col">

                <div className="mb-4 pt-1">
                    <label className="form-label"><strong>Nombre</strong></label>
                    <input onChange={handleChange} type='text' name='name' value={data.name} placeholder="Ingresa tu nombre" className="form-control"/>
                    {errors.name ? <p className={style["error-text"]}>{errors.name}</p> : <p className={style["error-text"]}></p>}
                </div>

        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Correo electrónico</strong>
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={data.email}
            placeholder="ejemplo@correo.com"
            className="form-control"
          />
          {errors.email ? (
            <p className={style["error-text"]}>{errors.email}</p>
          ) : (
            <p className={style["error-text"]}></p>
          )}
        </div>

        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Celular</strong>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="celular"
            value={data.celular}
            placeholder="Ingresa un número de 11 dígitos"
            className="form-control"
          />
          {errors.celular ? (
            <p className={style["error-text"]}>{errors.celular}</p>
          ) : (
            <p className={style["error-text"]}></p>
          )}
        </div>

        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Dirección</strong>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            value={data.address}
            placeholder="Ingresa una dirección de máximo 30 caracteres"
            className="form-control"
          />
          {errors.address ? (
            <p className={style["error-text"]}>{errors.address}</p>
          ) : (
            <p className={style["error-text"]}></p>
          )}
        </div>

        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Contraseña</strong>
          </label>
          <input
            onChange={handleChange}
            type={input1 ? 'text' : 'password'}
            name="password"
            value={data.password}
            placeholder="Contraseña"
            className="form-control"
          />
          <a onClick={togglePasswordVisibility1} className={style.eye}> 
            {!input1 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>} 
          </a>
          {errors.password ? (
            <p className={style["error-text"]}>{errors.password}</p>
          ) : (
            <p className={style["error-text"]}></p>
          )}
        </div>

        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Confirmar contraseña</strong>
          </label>
          <input
            onChange={handleChange}
            type={input2 ? 'text' : 'password'}
            name="passwordConfirmation"
            placeholder="Ingresa nuevamente tu contraseña"
            className="form-control"
          />
            <a onClick={togglePasswordVisibility2} className={style.eye}> 
            {!input2 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>} 
          </a>
          {errors.passwordConfirmation ? (
            <p className={style["error-text"]}>{errors.passwordConfirmation}</p>
          ) : (
            <p className={style["error-text"]}></p>
          )}
        </div>

        <div className="container w-100 py-2">
            <div className='row'>
                <div className="col">
                    <button type="submit" className='btn btn-primary w-100 my-1'>Registrarme</button>
                </div>
            </div>
            <div className="row my-3">
                <div className="col d-flex justify-content-center">
                    <p>¿Tienes una cuenta? <a onClick={toggleComponent} className='btn-outline-primary custom-button-height mx-2' style={{ cursor: "pointer" }}>Inicia sesión</a></p>
                </div>
            </div>
        </div>

      </form>
    </div>
  );
};

export default Register;
