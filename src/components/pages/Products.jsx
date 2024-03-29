import useFetch from "../../hooks/useFetch";
import ProductCard from "../molecules/ProductCard";
import Loader from "../atoms/Loader"


const Products = () => {
  const { data, error, loading } = useFetch("public/products");
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error en la peticion de productos...</p>;
  }

  return (
    <section className="py-5 max-w256 m-auto">
      <h1 className="py-16 max-w-256 m-auto text-center text-5xl">
        Explora nuestros productos
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products
