import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoImage from "./../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
   const nav = useNavigate();

   //Manejo del estado de errores
   const [error, setError] = useState();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);

      const data = {
         email: e.target.email.value,
         password: e.target.password.value,
      };
      axios
         .post(`${API_URL}/public/login`, data)
         .then((resp) => {
            setToken(resp.data.token);
            nav("/");
         })
         .catch((err) => console.log(err));
   };

   return (
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
         <div className="container m-auto py-12 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full gap-6 text-gray-800">
               <div className="xl:w-10/12">
                  <div className="block bg-white shadow-lg rounded-lg">
                     <div className="lg:flex lg:flex-wrap gap-0">
                        <div className="lg:w-6/12 px-4 md:px-0">
                           <div className="md:p-12 md:mx-6">
                              <div className="text-center">
                                 <img
                                    className="mx-auto w-48 mb-4 pt-4"
                                    src={logoImage}
                                    alt="logo"
                                 />
                                 <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
                                    Iniciar Sesion
                                 </h4>
                              </div>
                              <form onSubmit={handleSubmit}>
                                 <div className="mb-4 flex flex-col gap-2">
                                    <input
                                       className="w-full p-2 border rounded-md"
                                       type="text"
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
                                    <button type="submit">
                                       <span className="bg-gradient w-full text-white rounded-md p-2">
                                          Iniciar Sesion
                                       </span>
                                    </button>
                                    <Link className="text-gray-600" to="/registro">
                                       ¿No tienes cuenta? ¡Registrate!
                                    </Link>
                                 </div>
                                 {error && (
                                    <p className="text-center p-2 text-red-700">
                                       {error?.response?.data?.data}
                                    </p>
                                 )}
                              </form>
                           </div>
                        </div>
                        <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                           <div className="text-white px-2 mx-6 my-16 md:px-12 md:mx-6 w-full">
                              <span className="text-xl font semibold mb-6">
                                 Mas que un e-Commerce
                              </span>
                              <h4 className="text-xl">Somos una tienda en Linea</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;
