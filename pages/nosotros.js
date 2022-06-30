import { Layout } from '../components/Layout'
import Image from 'next/image'
import Styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
    return (
        <div>
            <Layout
                pagina='nosotros'
            >
                <main className='contenedor'>
                    <h2 className='heading'>Nosotros</h2>

                    <div className={Styles.contenido}>
                        <Image layout="responsive"width={600} height={450} src="/img/nosotros.jpg" alt="Nosotros" />

                        <div>
                            <p>es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, </p>
                        </div>
                    </div>

                </main>

            </Layout>
        </div>
    )
}

export default Nosotros
