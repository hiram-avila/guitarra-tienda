
import { Layout } from '../components/Layout'
import { Listado } from '../components/Listado'
import styles from '../styles/Listado.module.css'




export default function Home({guitarras, cursos}) {
  console.log(guitarras)
  console.log(cursos)
  return (
    <div >

      <Layout
          pagina='inicio' 
      >
        <main>
            <h1 className='heading'>Nuesta coleccion</h1>
            <div className={styles.listado}>
              {
                  guitarras.map((guitarra) => (
                    <Listado
                        key={guitarra.id}
                        guitarra={guitarra}
                    />
                ))}
            </div>
        </main>
      </Layout>

    </div>
  )
}

export async function getServerSideProps() {
 
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [guitarras, cursos] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])

    return {
      props: {
        guitarras,
        cursos
      }
    }
}
