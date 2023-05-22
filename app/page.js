import Image from 'next/image'

export default function Home() {
  return (
  <main>
    <div className="flex flex-col gap-6 card bg-blue-200 w-3/4 p-4">
      <h1 className="text-2xl font-bold">EngGPT</h1>
      <ul className="menu p-3 bg-blue-100 rounded-xl">
        <li className="menu-title">
          <span>Options</span>
        </li>
        <li><a href='/short-story'>Short Story</a></li>
        <li><a href='/sentences'>Sentences</a></li>
        <li><a href='/synonyms-acronyms'>Synonyms & Acronyms</a></li>
      </ul>
    </div>
  </main>
  )
}
