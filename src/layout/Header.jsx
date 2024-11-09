
import { motion } from 'framer-motion'
import { CiDark, CiLight } from 'react-icons/ci'
import { useTheme } from '../hooks/useTheme'
import { Logo } from '../assets/Logo'

export default function Header () {
  const { theme, handleClick } = useTheme()

  return (
    <>
      <header
        className='fixed w-full z-10'
      >
        <nav className='flex items-center justify-between w-full p-6'>
          <div className='flex lg:w-0 lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5 text-white'>
              <span className='sr-only'>Logo</span>
              <Logo className='w-14 h-auto text-transparent stroke-black dark:stroke-white' />
            </a>
          </div>
          {/* Button theme color */}
          <div className='hidden gap-2 lg:flex lg:flex-1 lg:justify-end'>
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-transparent border-0 cursor-pointer outline-none'
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === 'light' ? 180 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='flex items-center'
              >
                <span className='sr-only'>Switch color theme</span>
                {theme === 'dark'
                  ? (<CiDark size={35} color='white' />)
                  : (<CiLight size={35} />)}
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </header>
    </>
  )
}
