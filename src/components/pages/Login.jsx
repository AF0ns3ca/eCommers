import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        axios.post(`${API_URL}/public/login`, data)
            .then(resp => setToken(resp.data.data.token))
            .catch(err => console.log(err));
    };


   return (
      <div className="pt-16 max-w-256 m-auto">
         <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Correo Electronico" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Iniciar Sesion</button>
         </form>
      </div>
   );
};

export default Login;
