import SocialsNav from '../components/SocialsNav'

export default function Footer () {
  return (
    <footer className='mx-auto max-w-6xl py-14 px-0 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t-2'>
      <SocialsNav />
      <div className='mt-8 md:mt-0'>
        <small className='block text-center text-base text-gray-400 dark:text-white'>2023 • Damian Soto Concha.</small>
      </div>
    </footer>
  )
}
