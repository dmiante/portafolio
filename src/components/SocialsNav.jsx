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
            className='text-logo'
          >
            {links.icon}
          </a>
        ))}
      </div>
    </>
  )
}
