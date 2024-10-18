import { PROJECTS_DATA } from '../data/Projects'
import { TbWorldWww, TbBrandGithub } from 'react-icons/tb'

export default function Projects () {
  return (
    <section id='projects' className='mb-10 py-24 px-10'>
      <div className='flex justify-center mb-14'>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-black dark:text-white mb-5'>PROYECTOS</h2>
      </div>
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2'>
        {PROJECTS_DATA.map((projects) => (
          projects.show && (
            <div
              key={projects.url}
              className='overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg w-full h-96 group'
              style={{ backgroundImage: `url(${projects.image})` }}
            >
              <div
                className='flex flex-col justify-between w-full h-full px-8 py-4  duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'
              >
                <div>
                  <h2 className='mt-4 text-xl font-semibold text-white capitalize'>
                    {projects.description}
                  </h2>
                  <p className='mt-2 text-2xl tracking-wider text-blue-400 uppercase'>
                    {projects.title}
                  </p>
                </div>
                <div className='flex flex-row justify-center gap-10 text-white'>
                  <a
                    href={projects.gh}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-logo'
                  >
                    <span className='sr-only'>{projects.title}</span>
                    <TbBrandGithub name='github' size={50} />
                  </a>
                  <a
                    href={projects.url}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-logo'
                  >
                    <span className='sr-only'>{projects.title}</span>
                    <TbWorldWww name='www' size={50} />
                  </a>
                </div>
                <div className='pt-4 pb-2'>
                  {projects.tags.map((tag, index) => (
                    <span key={index} className='inline-block rounded-full px-3 text-lg font-normal italic text-white'>{`#${tag}`}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
        <a
          href='https://github.com/dmiante?tab=repositories'
          target='_blank'
          rel='noreferrer'
          className='flex flex-col items-center justify-center bg-black hover:bg-black/95 dark:hover:bg-white/90 dark:bg-white rounded-lg w-full h-96'
        >
          <h2 className='text-4xl font-semibold capitalize mb-2 text-white dark:text-black'>
            Otros proyectos
          </h2>
          <span className='sr-only'>github</span>
          <TbBrandGithub name='github' size={70} className='text-white dark:text-black' />
        </a>
      </div>
    </section>
  )
}
