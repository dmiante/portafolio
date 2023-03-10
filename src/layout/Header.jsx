import { useState } from 'react'
import { HeaderLink } from '../data/HeaderLink'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Transition } from '@headlessui/react'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className='fixed w-full shadow-sm backdrop-blur border-b border-gray-800/10 bg-white/10'>
        <div className='mx-auto max-w-6xl p-4 sm:px-6'>
          <div className='flex items-center justify-between gap-4 lg:gap-10'>
            <div className='flex lg:w-0 lg:flex-1'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Logo</span>
                <img className='w-14 h-auto' src='/logo-ds.svg' alt='logo' />
              </a>
            </div>
            <nav className='hidden lg:flex lg:gap-x-11'>
              {HeaderLink.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className='hover:bg-logo rounded-md p-2 hover:text-white'
                >{link.title}
                </a>
              ))}
            </nav>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <a
                className='inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
                href='/download'
              >
                <span
                  className='block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent'
                >
                  !Contáctame!
                </span>
              </a>
            </div>
            <div className='m-0 flex lg:hidden'>
              <button
                className='rounded-lg bg-gray-100 p-2 text-gray-600'
                type='button'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className='sr-only'>Open menu</span>
                {!isOpen
                  ? (
                    <CgMenuRight />
                    )
                  : (
                    <CgClose />
                    )}
              </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter='transition ease-out duration-100 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <section className='backdrop-blur bg-white/10 min-h-screen flex p-y-12'>
              <div className='flex flex-col items-center justify-center p-3 '>
                <nav className='flex flex-col gap-5'>
                  {HeaderLink.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                    >{link.title}
                    </a>
                  ))}
                </nav>
              </div>
            </section>

          </Transition>
        </div>
      </header>
    </>
  )
}
