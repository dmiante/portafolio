import { technologies } from '../data/Techs'

export default function Technology () {
  return (
    <section id='techs' className='mb-10 py-24 px-10'>
      <div className='flex justify-center mb-14'>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-gray-700 mb-5'>TECNOLOGÍAS</h2>
      </div>
      <div className='mb-10 font-normal text-xl'>
        <p>Estas son algunas tecnologias con la que desarrollo:</p>
      </div>
      <div className='grid grid-cols-2 gap-4 max-w-6xl md:grid-cols-5'>
        {technologies.map((card) => (
          <div
            key={card.name}
            className='p-1 rounded-2xl shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
          >
            <div className='grid grid-rows-1 content-center place-items-center space-y-2 rounded-xl bg-primary p-4 w-auto h-32'>
              {card.icon}
              <p className=' text-base font-medium text-gray-900'>
                {card.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
