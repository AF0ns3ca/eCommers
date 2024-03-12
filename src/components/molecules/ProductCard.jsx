// importar los productos
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/number";

const ProductCard = ({ product }) => {
   //Pasamos los elementos que recibe del componente padre, que es el producto
   const { images, product_name, id, price, description } = product;

   return (
      <article className="w-full max-w-sm min-h-[400px] bg-white round-lg shadow-lg p-5">
         <div className="h-full">
            <div className="mb-5 rounded-lg overflow-hidden">
               <Link to={`products/${id}`}>
                  <img
                     className="align-middle h-40 w-full object-cover"
                     src={images[0]}
                     alt={product_name}
                  />
               </Link>
            </div>
            <div className="h-full flex flex-col gap-2">
               <Link to={`products/${id}`}>
                  <h3 className="flex justify-between items-center font-bold">{product_name}</h3>
               </Link>
               <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
               <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{formatPrice(price)}</span>
               </div>
               <Link
                  to={`products/${id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[100px]">
                  Ver más
               </Link>
            </div>
         </div>
      </article>
   );
};

export default ProductCard;
