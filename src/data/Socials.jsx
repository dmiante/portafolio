import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/dmiante',
    Icon: ({ className = '' }) => <SiGithub className={className} />
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/damian-soto/',
    Icon: ({ className = '' }) => <SiLinkedin className={className} />
  },
  {
    name: 'Gmail',
    url: 'mailto:soto.damian02@gmail.com',
    Icon: ({ className = '' }) => <SiGmail className={className} />
  }
]
