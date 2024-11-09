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
            <span className='sr-only'>{name}</span>
            <Icon size={size} aria-hidden='true' />
          </a>
        ))}
      </div>
    </>
  )
}
