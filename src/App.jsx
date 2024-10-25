// import About from './components/About'
import Projects from './components/Projects'
import SocialsNav from './components/SocialsNav'
import Technology from './components/Technology'
import Footer from './layout/Footer'
import Header from './layout/Header'

// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <>
      <div className='min-h-screen mx-auto text-black bg-pattern-dark dark:bg-pattern-light bg-white dark:bg-black dark:text-white bg-no-repeat bg-contain w-full'>
        <Header />
        <main className='flex flex-col max-w-6xl mx-auto'>
          <div className='min-h-screen flex items-center justify-center py-12'>
            <section className='max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center'>
              <span className='text-3xl font-light'>
                ¡Hola! 👋
              </span>
              <h1 className='text-5xl bg-black dark:text-white bg-clip-text text-transparent font-medium tracking-widest sm:text-6xl md:text-6xl lg:text-8xl'>
                Damián Soto
              </h1>
              <h2 className='text-3xl font-light'>
                DESARROLLADOR WEB
              </h2>
              <SocialsNav />
            </section>
          </div>
          <Projects />
          <Technology />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
