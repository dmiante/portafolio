import { socialLinks } from '../data/Socials'

export default function SocialsNav () {
  return (
    <>
      <div className='flex justify-center space-x-6 gap-4'>
        {socialLinks.map((links) => (
          <a
            key={links.url}
            href={links.url}
            target='_blank'
            rel='noreferrer'
            className='text-logo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-75'
          >
            {links.icon}
          </a>
        ))}
      </div>
    </>
  )
}
