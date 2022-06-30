import {useState} from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])


  
  const agregrarCarrito = (producto) => {

        if(carrito.some((item) => item.id === producto.id)){
            const carritoActualizado = carrito.map((item) => {
              
                if(item.id === producto.id){
                  item.cantidad = producto.cantidad
                }
                return item
              })
            setCarrito(carritoActualizado)

        }else{
          setCarrito(...carrito, producto)
        }
  }


  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregrarCarrito}
  />
}

export default MyApp
