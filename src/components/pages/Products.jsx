import useFetch from '../../hooks/useFetch';

const Products = () => {

  const {data, error, loading} = useFetch('public/products');

  if(loading){
    return <h1>Cargando...</h1>
  }

  if(error){
    return <h1>Hubo un error</h1>
  }



  return (
    <div>
        <h1>Productos</h1>
        {
          data.length === 0 ? <h1>No hay productos</h1> : data.map((prod) =><div key={prod.id}>{JSON.stringify(prod)}</div>)
        }
    </div>
  )
}

export default Products
