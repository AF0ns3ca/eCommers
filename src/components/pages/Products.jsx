import useFetch from '../../hooks/useFetch';
import ProductCard from '../molecules/ProductCard';

const Products = () => {

  const {data, error, loading} = useFetch('public/products');

  if(loading){
    return <h1>Cargando...</h1>
  }

  if(error){
    return <h1>Hubo un error</h1>
  }



  return (
    <section className='py-16 max-w-256 m-auto'>
      <h1 className='text-center text-5xl max-w-256 m-auto font-bold'>Explora nuestros productos</h1>
      <div className='grid grid-cols-4 gap-6'>
        {
          data.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </section>
  )
}

export default Products
