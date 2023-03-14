import { technologies } from '../data/Techs'

export default function Technology () {
  return (
    <section id='techs' className='mb-10 px-10 pt-24'>
      <div className='flex justify-center mb-14'>
        <h2 className='text-center text-2xl font-bold text-gray-700'>TECNOLOGÍAS</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-4 max-w-6xl'>
        {technologies.map((card) => (
          <div
            key={card.name}
            className='p-1 rounded-2xl shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
          >
            <div className='flex flex-col rounded-xl bg-white p-10 place-items-center h-44 w-40'>
              {card.icon}
              <p className='text-2xl font-semibold tracking-tight text-gray-900 font-sans pt-5'>
                {card.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
