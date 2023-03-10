import { useState } from 'react'
import { HeaderLink } from '../data/HeaderLink'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Transition } from '@headlessui/react'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  // function scroll () {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }

  return (
    <>
      <header className='fixed w-full shadow-sm backdrop-blur border-b border-gray-800/10 bg-white/10 scroll-smooth'>
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
                    <CgMenuRight size={30} name='Menu Open' />
                    )
                  : (
                    <CgClose size={30} name='Menu Close' />
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
            <section className='flex flex-row justify-center items-center px-4 pt-5'>
              <div className='w-full'>
                <ul className='text-center flex flex-col gap-y-4 font-semibold text-gray-700 text-lg'>
                  {HeaderLink.map((link) => {
                    return (
                      <li key={link.url} className='underline underline-offset-2 decoration-logo decoration-2'>
                        <a
                          href={link.url}
                          onClick={() => setIsOpen(false)}
                        >{link.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </section>

          </Transition>
        </div>
      </header>
    </>
  )
}
