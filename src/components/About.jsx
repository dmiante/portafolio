import Profile from '../assets/profile_BW.jpeg'
export default function About () {
  return (
    <>
      <section id='about' className='mb-10 py-24 px-10'>
        <div className='flex justify-center mb-14'>
          <h2 className='text-center text-4xl md:text-5xl font-bold text-gray-700 dark:text-slate-300 mb-5'>SOBRE MÍ</h2>
        </div>
        <div className='grid grid-cols-1 items-center h-auto gap-10 lg:my-0 md:grid-cols-2 place-items-center'>
          <p className='text-gray-600 dark:text-slate-300 text-center font-semibold text-base md:text-xl lg:text-2xl'>
            Soy <span className='italic underline underline-offset-2 decoration-2 decoration-logo hover:bg-logo hover:text-white hover:p-2 hover:rounded-xl'>Damián Soto</span>, un desarrollador de software de Santiago titulado de ingeniero en informática. Me considero proactivo, comprometido y apasionado por la tecnología 🖥️ y los videojuegos 🕹️. Actualmente aprendo programación con <span className='text-yellow-500'>JavaScript</span> y <span className='text-sky-500'>React</span>
          </p>
          <img src={Profile} alt='profile' loading='lazy' className='rounded-3xl border-logo border-4' width={350} />
        </div>
      </section>
    </>
  )
}
