export default function About () {
  return (
    <>
      <section id='about' className='mb-10 px-10'>
        <div className='flex justify-center mb-14'>
          <h2 className='text-center text-2xl font-bold text-gray-700'>SOBRE MÍ</h2>
        </div>
        <div className='grid grid-cols-1 items-start h-auto gap-5'>
          <p className='text-gray-600 text-center font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vero corrupti consequatur esse nemo mollitia neque rerum est. Repellat similique ab minima quidem quis voluptatem ratione libero dolorem accusantium soluta.</p>
          <img src='../src/assets/projects/card-top.jpg' alt='profile' />
        </div>
      </section>
    </>
  )
}
