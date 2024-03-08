const Form = () => {
    return (
      <div>
        <h1>Crear Producto</h1>
        <form>
            <input type="text" name="productName" placeholder="Producto..." required/>
            <input type="number" name="price" placeholder="Precio..." required/>
            <input type="url" name="image" placeholder="Imagen..." required/>
        </form>
      </div>
    )
  }
   
  export default Form