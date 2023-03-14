import { PROJECTS_DATA } from '../data/Projects'

export default function Projects () {
  return (
    <section id='projects' className='mb-10 px-10 pt-24'>
      <div className='flex justify-center mb-14'>
        <h2 className='text-center text-2xl font-bold text-gray-700'>PROYECTOS</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        {PROJECTS_DATA.map((projects) => (
          <div
            key={projects.title}
            className='max-w-sm rounded overflow-hidden shadow-lg'
          >
            <img className='w-full' src={projects.image} alt='project one' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{projects.title}</div>
              <p className='text-gray-700 text-base'>
                {projects.description}
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{`#${projects.tags[0]}`}</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{`#${projects.tags[1]}`}</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{`#${projects.tags[2]}`}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
