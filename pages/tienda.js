import { Layout } from '../components/Layout'
import { Listado } from '../components/Listado'
import styles from '../styles/Listado.module.css'


 const Tienda = ({guitarras}) => {

  return (
    <div>
        <Layout
            pagina='Tienda'
        >
          <div className={styles.listado}>
              {
                guitarras.map((guitarra) => (
                  <Listado
                      key={guitarra.id}
                      guitarra={guitarra}
                  />
              ))}
            </div>
        </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  console.log(guitarras)

    return {
      props: {
        guitarras
      }
    }
}

export default Tienda