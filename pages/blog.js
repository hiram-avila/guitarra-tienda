import { Layout } from '../components/Layout'
import { Blogs } from '../components/Blogs'
import styles from '../styles/BlogPadre.module.css'


 const Blog = ({blogs}) => {

  return (
        <Layout
            pagina='blog'
        >
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>

                <div className={styles.blog}>
                    {
                      blogs.map((blog) => (
                        <Blogs
                          key={blog.id}
                          blog={blog}
                        />
                      ))
                    }
                </div>
             </main>
        </Layout>
  )
}






export async function getStaticProps() {
 
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
    const blogs = await respuesta.json()

    return{
      props:{
          blogs 
      }
    }
}

export default Blog