import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

export const Listado = ({ guitarra }) => {
    const { nombre, descripcion, imagen, precio, url } = guitarra


    const nombre1 = `/img/${url}.jpg`

    return (
            <div className={styles.guitarra}>
                <Image layout='responsive' width={250} height={580} src={nombre1} alt="guitarra" />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>
                    <Link href={`/guitarras/${url}`}>
                        Ver producto
                    </Link>
                </div>
            </div>
    )
}

