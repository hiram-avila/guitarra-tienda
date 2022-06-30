import Image from 'next/image'
import { useState} from 'react'
import Link from 'next/link'
import { Layout } from '../../components/Layout'

import styles from '../../styles/Blog.module.css'

 const Producto = ({guitarra, agregarCarrito,carrito}) => {
    const [cantidad, setCantidad] = useState(1)

  

    const {id,precio, nombre, descripcion, published_at} = guitarra[0]

    const handleSubmit = (e) => {        
        e.preventDefault()
        const guitarraSeleccionada = {
            id, 
            precio,
            cantidad,
            nombre,
            descripcion
        }
       agregarCarrito(guitarraSeleccionada)
        alert('objeto agregado')
    };

    return (

        <Layout
             pagina='nosotros'
        >                
            <div className={styles.contenido}>
            <Link href='/tienda'>
                    <a  className={styles.navegacion}>
                     ⬅ Regresar
                    </a>
                </Link>

                <br />
                <br />

                <h3>{nombre}</h3>
                <p className={styles.fecha}>{published_at}</p>
                <p className={styles.resumen}>{descripcion}</p>

                <form className={styles.form} onSubmit={ handleSubmit }>
                    <label>Cantidad:</label>

                    <select 
                        value={cantidad}
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                     >
                        <option value=""> -- Seleccione -- </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
     

                    <input 
                        type="submit"
                        value="agregar al carrito"
                    />
             
                

                </form>

             </div>
         </Layout>
    )
  }
  
export async function getServerSideProps ({query:{url}}){

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return{
        props: {
            guitarra
        }
    }
}

export default Producto