import { API_URL } from "../../constants/env";

const Home = () => {
   return (
    //Icono reservado para los fragmentos
      <>
         <div>
            <h1>Bienvenido a la tienda {API_URL}</h1>
            <p>Compra los mejores productos</p>
         </div>
      </>
   );
};

export default Home;
