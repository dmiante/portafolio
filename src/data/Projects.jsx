import Climapp from '../assets/projects/climapp.png'
import PokeChang from '../assets/projects/pokechang.png'
import Removebg from '../assets/projects/removebg.png'
import Shrtu from '../assets/projects/shrtu.png'

import Css from '../assets/skill/css.svg'
import Javascript from '../assets/skill/javascript.svg'
import React from '../assets/skill/react.svg'
import Tailwindcss from '../assets/skill/tailwindcss.svg'
import Svelte from '../assets/skill/svelte.svg'
import TypeScript from '../assets/skill/typescript.svg'
import Nextjs from '../assets/skill/nextjs.svg'
import Prisma from '../assets/skill/prisma.svg'
import Supabase from '../assets/skill/supabase.svg'
import Cloudinary from '../assets/skill/cloudinary.svg'

export const PROJECTS_DATA = [
  {
    title: 'Climapp',
    description: 'Aplicación del clima con autocompletado y pronóstico por horas.',
    gh: 'https://github.com/dmiante/climapp',
    url: 'https://climapp-dmiante.vercel.app/',
    image: Climapp,
    tags: [{ tech: 'ReactJS', icon: React }, { tech: 'JavaScript', icon: Javascript }, { tech: 'CSS', icon: Css }],
    show: true,
    priority: 3
  },
  {
    title: 'Giffy',
    description: 'Clon de Giphy.com hecho con React.',
    gh: 'https://github.com/dmiante/giffy',
    url: 'https://giffy-dmiante.vercel.app/',
    image: null,
    tags: [{ tech: 'ReactJS', icon: React }, { tech: 'JavaScript', icon: Javascript }, { tech: 'CSS', icon: Css }],
    show: false,
    priority: 2
  },
  {
    title: 'Portafolio',
    description: 'Portafolio web donde muestro mis proyectos y tecnologías utilizadas.',
    gh: 'https://github.com/dmiante/portafolio',
    url: 'https://damiansoto.dev/',
    image: null,
    tags: [{ tech: 'ReactJS', icon: React }, { tech: 'JavaScript', icon: Javascript }, { tech: 'TailwindCSS', icon: Tailwindcss }],
    show: false,
    priority: 1
  },
  {
    title: 'PokeChang',
    description: 'Pokedex que te permite buscar y explorar información sobre diferentes Pokémon.',
    gh: 'https://github.com/dmiante/poke-chang',
    url: 'https://poke-chang.vercel.app',
    image: PokeChang,
    tags: [{ tech: 'ReactJS', icon: React }, { tech: 'JavaScript', icon: Javascript }, { tech: 'TailwindCSS', icon: Tailwindcss }, { tech: 'PokeAPI', icon: null }],
    show: true,
    priority: 3
  },
  {
    title: 'RemoveBG',
    description: 'Aplicación web que permite eliminar el fondo de cualquier imagen.',
    gh: 'https://github.com/dmiante/removebg',
    url: 'https://removebackground.vercel.app',
    image: Removebg,
    tags: [{ tech: 'Svelte', icon: Svelte }, { tech: 'TypeScript', icon: TypeScript }, { tech: 'TailwindCSS', icon: Tailwindcss }, { tech: 'Cloudinary', icon: Cloudinary }],
    show: true,
    priority: 4
  },
  {
    title: 'shrtu',
    description: 'Acortador de urls simple y rápido.',
    gh: 'https://github.com/dmiante/short-url',
    url: 'https://shrtu.vercel.app',
    image: Shrtu,
    tags: [{ tech: 'NextJS', icon: Nextjs }, { tech: 'TypeScript', icon: TypeScript }, { tech: 'TailwindCSS', icon: Tailwindcss }, { tech: 'Prisma', icon: Prisma }, { tech: 'Supabase', icon: Supabase }],
    show: true,
    priority: 5
  }
]
