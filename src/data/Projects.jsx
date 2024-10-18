import Climapp from '../assets/projects/climapp.webp'
import Giffy from '../assets/projects/giffy.webp'
import Portafolio from '../assets/projects/portafolio.webp'
import PokeChang from '../assets/projects/pokechang.webp'
import Removebg from '../assets/projects/removebg.webp'
import Shrtu from '../assets/projects/shrtu.webp'

export const PROJECTS_DATA = [
  {
    title: 'Climapp',
    description: 'Aplicación del clima con autocompletado y pronóstico por horas.',
    gh: 'https://github.com/dmiante/climapp',
    url: 'https://climapp-dmiante.vercel.app/',
    image: Climapp,
    tags: ['React', 'JavaScript', 'CSSModules'],
    show: true
  },
  {
    title: 'Giffy',
    description: 'Clon de Giphy.com hecho con React.',
    gh: 'https://github.com/dmiante/giffy',
    url: 'https://giffy-dmiante.vercel.app/',
    image: Giffy,
    tags: ['React', 'JavaScript', 'CSS'],
    show: false
  },
  {
    title: 'Portafolio',
    description: 'Portafolio web donde muestro mis proyectos y tecnologías utilizadas.',
    gh: 'https://github.com/dmiante/portafolio',
    url: 'https://damiansoto.dev/',
    image: Portafolio,
    tags: ['React', 'JavaScript', 'TailwindCSS'],
    show: false
  },
  {
    title: 'PokeChang',
    description: 'Pokedex que te permite buscar y explorar información sobre diferentes Pokémon.',
    gh: 'https://github.com/dmiante/poke-chang',
    url: 'https://poke-chang.vercel.app',
    image: PokeChang,
    tags: ['React', 'JavaScript', 'TailwindCSS', 'PokeAPI'],
    show: true
  },
  {
    title: 'RemoveBG',
    description: 'Aplicación web que permite eliminar el fondo de cualquier imagen.',
    gh: 'https://github.com/dmiante/removebg',
    url: 'https://removebackground.vercel.app',
    image: Removebg,
    tags: ['Svelte', 'TypeScript', 'TailwindCSS', 'Cloudinary'],
    show: true
  },
  {
    title: 'shrtu',
    description: 'Acortador de urls rápido y simple.',
    gh: 'https://github.com/dmiante/short-url',
    url: 'https://shrtu.vercel.app',
    image: Shrtu,
    tags: ['NextJS', 'TypeScript', 'TailwindCSS', 'Prisma', 'Supabase'],
    show: true
  }
]
