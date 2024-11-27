import { LuArrowUpRight, LuGithub } from 'react-icons/lu'
import { PROJECTS_DATA } from '../data/Projects'

export default function Projects () {
  return (
    <section id='projects' className='mb-10 py-24 px-10'>
      <div className='flex justify-center mb-14'>
        <h2 className='text-center text-4xl md:text-5xl text-black font-light dark:text-white mb-5'>
          PROYECTOS
        </h2>
      </div>
      <ul>
        {PROJECTS_DATA.sort((a, b) => b.priority - a.priority).map((projects) => (
          projects.show && (
            <li
              key={projects.url}
              className='grid grid-cols-2 gap-10 mb-20 border px-7 py-6 rounded-lg border-gray-200 dark:border-neutral-800 shadow-md bg-slate-50 dark:bg-neutral-900'
            >
              <a
                href={projects.url}
                target='_blank'
                rel='noreferrer'
                className='relative w-full flex-col items-center gap-8 overflow-clip rounded-3xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:shadow-2xl'
              >
                <img
                  src={projects.image}
                  alt={projects.title}
                  width={500}
                  height={400}
                  className=' w-full object-cover object-top transition duration-500 hover:scale-105 sm:h-full sm:border md:scale-110 md:group-hover:scale-105'
                />
              </a>
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-10 items-baseline justify-between'>
                    <a
                      href={projects.url}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-start gap-1 hover:underline hover:underline-offset-4 dark:hover:text-sky-800 hover:text-sky-700'
                    >
                      <h3
                        className='text-4xl font-semibold text-sky-500 dark:text-sky-500 dark:hover:text-sky-800 hover:text-sky-700'
                      >
                        {projects.title}
                      </h3>
                      <LuArrowUpRight size={18} />
                    </a>
                    <div className='flex gap-6'>
                      <a
                        href={projects.url} target='_blank' rel='noreferrer'
                        className='group flex justify-center transition-all rounded-md p-2 dark:hover:bg-zinc-800 hover:bg-neutral-100'
                      >
                        <LuGithub size={24} />
                        <span
                          className='absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 duration-500 text-sm'
                        >Repo
                        </span>
                      </a>
                    </div>
                  </div>
                  <p className='dark:text-slate-300'>{projects.description}</p>
                </div>
                <div className='flex flex-wrap items-center gap-2 py-4 cursor-default'>{projects.tags.map(({ tech, icon }) => (
                  <div key={tech} className='flex gap-2 border border-gray-200 dark:border-neutral-800 dark:hover:border-neutral-700 rounded-full px-6 py-3 text-sm items-center hover:border-gray-300'>
                    {icon && <img src={icon} alt={tech} width={20} height={20} className='object-contain' />}
                    <p>{tech}</p>
                  </div>
                ))}
                </div>
              </div>
            </li>
          )
        ))}
      </ul>
    </section>
  )
}
