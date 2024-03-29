import { Link, useNavigate } from "react-router-dom"
import { deleteToken, token } from "../../../helpers/auth"

export const MainMenu = () => {

    const nav = useNavigate();

    const handleSession = () => {
        deleteToken();
        nav("/");
    }


  return (
    <nav className="w-full ">
        <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
                <Link className="menu-item" to="/">Inicio</Link>
            </li>
            <li className="flex items-center">
                <Link className="menu-item" to="/products">Productos</Link>
            </li>
            {
                !token() ? (
                    <li className="flex items-center">
                        <Link className="menu-item" to="/login">Iniciar Sesion</Link>
                    </li>
                ) : (
                    <li className="flex items-center">
                        <a onClick={handleSession} className="menu-item cursor-pointer">Cerrar Sesion</a>
                    </li>
                )
                
            }
        </ul>
    </nav>
  )
}

export default MainMenu
