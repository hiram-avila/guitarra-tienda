import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Blog.module.css'

export const Blogs = ({blog}) => {
    const {id, titulo, resumen, imagen, published_at, url} = blog
    console.log(url)

    

  return (

    <article>
            <Image layout='responsive' width={300} height={200} src='/img/nosotros.jpg' alt={titulo} />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{published_at}</p>
            <p className={styles.resumen}>{resumen}</p>

            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                     Leer mas...
                </a>
            </Link>
        </div>
    </article>
  )
}
