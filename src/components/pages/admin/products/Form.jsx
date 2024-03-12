import axios from "axios"
import { token } from "../../../../helpers/auth"
import { API_URL } from "../../../../constants/env"

const Form = () => {

    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const data = {
        name: form.productName.value,
        price: form.price.value,
        image: [form.image.value],
        description: form.description.value,
        features: {
          color: form.color.value
        }
      }
      console.log(data)
      
      axios.post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        console.log(res)
        alert("Producto creado con éxito")
      }).catch(err => {
        alert("Error al crear el producto")
      })
    }

    return (
      <div>
        <h1>Crear Producto</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="productName" placeholder="Producto..." required/>
            <input type="number" name="price" placeholder="Precio..." required/>
            <input type="url" name="image" placeholder="Imagen..." required/>
            <textarea name="description" cols="30" rows="10"></textarea>
            <input type="text" name="color" placeholder="Color..." required/>
            <button type="submit">Crear Producto</button>
        </form>
      </div>
    )
  }
   
  export default Form