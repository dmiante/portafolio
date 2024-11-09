import { LuGithub, LuMail, LuLinkedin } from 'react-icons/lu'

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/dmiante',
    Icon: ({ className = '', size }) => <LuGithub className={className} size={size} />
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/damian-soto/',
    Icon: ({ className = '', size }) => <LuMail className={className} size={size} />
  },
  {
    name: 'Gmail',
    url: 'mailto:soto.damian02@gmail.com',
    Icon: ({ className = '', size }) => <LuLinkedin className={className} size={size} />
  }
]
