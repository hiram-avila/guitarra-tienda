import React from 'react'
import  Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children, pagina}) => {

  return (
    <div>
        <Head>
            <title>Next.js - {pagina}</title>
            <meta name= 'description' content='sitio de ventas de guitarras'/>

        </Head>

        <Header />

        <h1>desde Layout</h1>

        {children} 
        
        <Footer/>
    </div>
  )
}
