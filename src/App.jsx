// import About from './components/About'
import Projects from './components/Projects'
import { ScrollDown } from './components/ScrollDown'
import SocialsNav from './components/SocialsNav'
import Footer from './layout/Footer'
import Header from './layout/Header'

// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <>
      <div className='min-h-screen mx-auto text-black bg-pattern-dark dark:bg-pattern-light bg-white dark:bg-neutral-900 dark:text-white bg-no-repeat bg-cover bg-fixed bg-center w-full'>
        <Header />
        <main className='flex flex-col max-w-6xl mx-auto'>
          <div className='min-h-screen flex flex-col items-center justify-center py-12'>
            <section className='max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center'>
              <h1 className='text-5xl font-medium tracking-widest sm:text-6xl md:text-6xl lg:text-8xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent'>
                Damián Soto
              </h1>
              <h2 className='text-3xl font-light'>
                Full Stack Developer
              </h2>
              <SocialsNav className='dark:text-sky-400 text-sky-400 hover:text-sky-800 dark:hover:text-white group flex justify-center transition-all rounded-md p-2' size={36} />
            </section>
            <ScrollDown />
          </div>
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
