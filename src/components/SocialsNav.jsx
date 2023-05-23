import { SOCIAL_LINKS } from '../data/Socials'

export default function SocialsNav () {
  return (
    <>
      <div className='flex justify-center space-x-6 gap-4'>
        {SOCIAL_LINKS.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='text-logo transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150'
          >
            <span className='sr-only'>{name}</span>
            <Icon className='h-10 w-10' aria-hidden='true' />
          </a>
        ))}
      </div>
    </>
  )
}
