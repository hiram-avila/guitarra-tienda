import {Layout} from '../components/Layout'
import styles from '../styles/Carrito.module.css'

 const Carrito = ({carrito}) => {


  const { cantidad, nombre, imagen, precio, url, descripcion} = carrito
  console.log(descripcion)

  return (
    <Layout pagina={"carrito de compras"} >
            <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div> 
                <p>{nombre}</p>
                <p>{descripcion}</p>
            </div>

            <div> 2 </div>
        </main>

    </Layout>
    
  );
};

 export default Carrito

 
