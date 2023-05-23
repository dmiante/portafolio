import { SOCIAL_LINKS } from '../data/Socials'

export default function Footer () {
  return (
    <footer className='mx-auto max-w-6xl py-14 px-0 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t-2'>
      <div className='flex justify-center space-x-6'>
        {SOCIAL_LINKS.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='p-1 cursor-pointer text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>{name}</span>
            <Icon className='h-6 w-6' aria-hidden='true' />
          </a>
        ))}
      </div>
      <div className='mt-8 md:mt-0'>
        <small className='block text-center text-base text-gray-400 dark:text-white'>2023 • Damian Soto Concha.</small>
      </div>
    </footer>
  )
}
