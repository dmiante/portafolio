import About from './components/About'
import Projects from './components/Projects'
import SocialsNav from './components/SocialsNav'
import Technology from './components/Technology'
import Footer from './layout/Footer'
import Header from './layout/Header'

function App () {
  return (
    <>
      <div className='min-h-screen mx-auto bg-primary w-full'>
        <Header />
        <main className='flex flex-col max-w-6xl mx-auto'>
          <div className='min-h-screen flex items-center justify-center py-12'>
            <section className='max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center'>
              <h1 className='text-5xl font-bold tracking-tight text-gray-700 sm:text-6xl md:text-6xl lg:text-8xl'>
                Hola! 👋{' '}
                <br className='hidden sm:block' />
                Soy Damián
              </h1>
              <h2 className='text-3xl font-semibold text-gray-700'>Desarrollador Front-end</h2>
              <SocialsNav />
            </section>
          </div>
          <About />
          <Technology />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
