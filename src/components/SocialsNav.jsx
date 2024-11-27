import { SOCIAL_LINKS } from '../data/Socials'

export default function SocialsNav ({ className, size }) {
  return (
    <>
      <div className='flex justify-center space-x-6 gap-4'>
        {SOCIAL_LINKS.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            rel='noreferrer'
            className={className}
          >
            <span
              className='absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-12 duration-500 text-sm text-sky-800 dark:text-white'
            >
              {name}
            </span>
            <span className='sr-only'>{name}</span>
            <Icon size={size} aria-hidden='true' />
          </a>
        ))}
      </div>
    </>
  )
}
