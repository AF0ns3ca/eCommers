import { Link } from "react-router-dom"

export const MainMenu = () => {
  return (
    <nav className="w-full ">
        <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
                <Link className="menu-item" to="/">Inicio</Link>
            </li>
            <li className="flex items-center">
                <Link className="menu-item" to="/productos">Productos</Link>
            </li>
            <li className="flex items-center">
                <Link className="menu-item" to="/login">Iniciar Sesion</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainMenu