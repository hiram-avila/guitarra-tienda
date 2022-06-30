import { Layout } from "../../components/Layout"
import Image from 'next/image'
import styles from '../../styles/Blog.module.css'

 const EntradaBlog = ({blogs}) => {

    const {contenido, imagen, published_at, titulo, } = blogs 
    console.log(titulo, contenido)
   

  return (   
        <Layout>
            <main className="contenedor"> 
                <h1 className="heading">desde blog</h1>
                <article className={styles.blog}>

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{published_at}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>

        </Layout>
  )
}




export async function getStaticPaths() {

    const url =`${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const blogs = await respuesta.json()

    const paths = blogs.map(blog => ({
        params: {
            url: blog.url
        }
    }))


    return{
        paths,
        fallback: false

    }
}

export async function getStaticProps({params: {url}}) {

    const urlBlog =`${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const blogs = await respuesta.json()
    console.log(urlBlog)

    return{
        props:{
            blogs: blogs[0]
        }

    }
}

// export async function getServerSideProps({query}) {

//      const url = `${process.env.API_URL}/blogs/${query.id}`
//     const respuesta = await fetch(url)
//     const blogs = await respuesta.json()

//     console.log(blogs)
//     return{
//         props:{
//             blogs
//         }

//     }
// }


export default EntradaBlog
