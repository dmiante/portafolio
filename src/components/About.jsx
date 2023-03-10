export default function About () {
  return (
    <>
      <section id='about' className='mb-10 px-10 py-24'>
        <div className='flex justify-center mb-14'>
          <h2 className='text-center text-2xl font-bold text-gray-700'>SOBRE MÍ</h2>
        </div>
        <div className='grid grid-cols-1 items-start h-auto gap-10'>
          <p className='text-gray-600 text-center font-semibold text-base'>
            Soy Damián, ingeniero en informática apasionado por el desarrollo de software. Poseo conocimientos sólidos en programación, diseño y desarrollo web, así como en diversas herramientas y frameworks como React y NodeJS. Me considero una persona proactiva, comprometida y dispuesta a aprender. Actualmente resido en Santiago de Chile y busco una oportunidad para aplicar mis habilidades y conocimientos en un entorno de trabajo profesional.
          </p>
          <img src='../src/assets/profile_BW.jpeg' alt='profile' loading='lazy' className='rounded-3xl border-logo border-4' />
        </div>
      </section>
    </>
  )
}
