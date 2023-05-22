import Image from 'next/image'

export default function Home() {
  return (
  <main>
    <div className='flex flex-col gap-6 card bg-indigo-100 w-3/4 p-4'>
      <h1 className='text-2xl font-bold'>home</h1>
      <a href='/shortstory'>Short Story</a>
    </div>
  </main>
  )
}
