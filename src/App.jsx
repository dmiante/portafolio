
function App () {
  return (
    <>
      <div className='w-full relative bg-primary h-screen'>
        <header className='mx-auto max-w-3xl px-4 py-5'>
          <nav className='flex items-center justify-between md:py-10'>
            <div>
              <a href='/'>
                <img className='w-14 h-auto' src='/logo-ds.svg' alt='logo' />
              </a>
            </div>
            <div className='flex items-center space-x-4'>
              <a href='/'>Inicio</a>
              <a href='/about'>Sobre Mi</a>
              <a href='/projects'>Proyectos</a>
              <a href='/contact'>Contacto</a>
            </div>
          </nav>
        </header>
        <main className='flex flex-col px-8'>
          <div className='w-full mx-auto'>
            <div className='flex flex-col items-center justify-center py-12 space-y-2'>
              <h1 className='text-5xl font-bold tracking-tight text-gray-700 sm:text-6xl md:text-6xl lg:text-8xl'>
                Hola! Soy <strong>Damián</strong>
              </h1>
              <h2 className='text-3xl font-semibold text-gray-700'>Desarrollador Front-end</h2>
            </div>
            <section className='mb-10'>
              <h2 className='mx-auto text-center text-2xl font-bold text-gray-700'>HABILIDADES</h2>
              <div>
                <div>
                  <img width={48} src='./src/assets/skill/html.svg' />
                  <img width={48} src='./src/assets/skill/javascript.svg' />
                  <img width={48} src='./src/assets/skill/tailwindcss.svg' />
                  <img width={48} src='./src/assets/skill/css.svg' />
                  <img width={48} src='./src/assets/skill/github.svg' />
                  <img width={48} src='./src/assets/skill/git.svg' />
                  <img width={48} src='./src/assets/skill/react.svg' />
                  <img width={48} src='./src/assets/skill/mysql.svg' />
                  <img width={48} src='./src/assets/skill/vscode.svg' />
                  <img width={48} src='./src/assets/skill/nodejs.svg' />
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <p>Dmi4n</p>
        </footer>
      </div>
    </>
  )
}

export default App
