import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate";


const Register = () => {
   const nav = useNavigate();

   //Manejo del estado de errores
   const [error, setError] = useState();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError();

      const data = {
         email: e.target.email.value,
         password: e.target.password.value,
         details:{
            fullname: e.target.fullname.value,
         }
      };
      axios
         .post(`${API_URL}/public/users`, data)
         .then(() => {
            nav("/login");
         })
         .catch((err) => {
            console.log(err);
            setError(err);
         });
   };

   return (
      <LoginTemplate title="Registrate">
         <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-2">
               <input
                  className="w-full p-2 border rounded-md"
                  type="text"
                  placeholder="Nombre Completo..."
                  name="fullname"
                  required
               />
            </div>
            <div className="mb-4 flex flex-col gap-2">
               <input
                  className="w-full p-2 border rounded-md"
                  type="email"
                  placeholder="Correo Electronico..."
                  name="email"
                  required
               />
            </div>
            <div>
               <input
                  className="w-full p-2 border rounded-md"
                  type="password"
                  placeholder="Contraseña..."
                  name="password"
                  required
               />
            </div>
            <div className="text-center pt-1 mb-12 pb-1 mt-3 flex flex-col gap-2">
               <button type="submit" className="bg-gradient w-full text-white rounded-md p-2">
                  <span>Registrarse</span>
               </button>
               <Link className="text-gray-600" to="/login">
                  ¿Ya tienes cuenta? ¡Inicia Sesion!
               </Link>
            </div>
            {error && (
               <p className="text-center p-2 bg-red-100 text-red-700 rounded-md">
                  {error?.response?.data?.data}
               </p>
            )}
         </form>
      </LoginTemplate>
   );
};

export default Register;
