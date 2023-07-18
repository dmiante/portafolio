import Profile from '../assets/profile_BW.webp'
export default function About () {
  return (
    <>
      <section id='about' className='mb-10 py-24 px-10'>
        <div className='flex justify-center mb-14'>
          <h2 className='text-center text-4xl md:text-5xl font-bold text-black dark:text-white mb-5'>SOBRE MÍ</h2>
        </div>
        <div className='grid grid-cols-1 items-center h-auto gap-10 lg:my-0 md:grid-cols-2 place-items-center'>
          <p className='text-black dark:text-white text-start font-normal text-base md:text-xl lg:text-2xl'>
            Soy <span className='italic font-medium underline underline-offset-2 decoration-2 decoration-logo'>Damián Soto</span>, programador de software e ingeniero en informática de Santiago de Chile.
            <br />
            Me considero proactivo, comprometido y un apasionado por la tecnología 🖥️ y los videojuegos 🕹️. Actualmente, aprendo programación con <span className='text-yellow-500'>JavaScript</span> y <span className='text-sky-500'>React</span>
          </p>
          <img src={Profile} alt='profile' loading='lazy' className='rounded-3xl border-logo border-4' width={350} />
        </div>
      </section>
    </>
  )
}
