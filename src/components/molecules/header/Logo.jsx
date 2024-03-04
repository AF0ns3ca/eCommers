import { Link } from "react-router-dom"
import logoImage from "../../../assets/imgs/logo.svg";

export const Logo = () => {
  return (
    <div className="flex py-3">
        <Link className="" to="/">
            <img src={logoImage} alt="Logo del comercio virtual" />
        </Link>
    </div>
  )
}

export default Logo
