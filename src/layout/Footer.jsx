import SocialsNav from '../components/SocialsNav'

export default function Footer () {
  return (
    <footer className='mx-auto max-w-6xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
      <SocialsNav />
      <div className='mt-8 md:mt-0'>
        <small className='block text-center text-sm text-gray-400'>© 2023 Damian Soto Concha.</small>
      </div>
    </footer>
  )
}
