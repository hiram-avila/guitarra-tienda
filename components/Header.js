import Link from "next/link";
import Image from 'next/image'

import styles from "../styles/Header.module.css";

export const Header = () => {
  return (

    <header className={styles.header}>
        <div className="contenedor">
                 <div className={styles.barra}>
                      <Link href='/' passHref>
                          <a>
                                <Image className={styles.link} width={400} height={100} src='/img/logo.svg' alt="Imagen logo"/>
                          </a>

                        </Link>

                      <nav className={styles.navegacion}>
                          <Link href='/'>Inicio</Link>
                          <Link href='/nosotros'>Nosotros</Link>
                          <Link href='/blog'>Blog</Link>
                          <Link href='/tienda'>Tienda</Link>
                          <Link href='/carrito'>
                              <a>
                                <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="imagen carrito"/>
                              </a>
                          </Link>
                      </nav>
                </div>

            </div>
    </header>
  )
}
