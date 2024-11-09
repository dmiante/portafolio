import { LuArrowDown } from 'react-icons/lu'
export function ScrollDown () {
  return (
    <section className='flex items-center animate-pulse absolute bottom-[3%] left-1/2 -translate-x-1/2'>
      <div className='flex flex-col items-center'>
        <span className='font-small'>Scroll</span>
        <LuArrowDown size={20} className='animate-bounce' />
      </div>
    </section>
  )
}
