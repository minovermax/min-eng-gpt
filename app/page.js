import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-6 card bg-blue-200 w-3/4 p-4">
        <h1 className="text-2xl font-bold">EngGPT</h1>
        <ul className="menu p-3 bg-blue-100 rounded-xl">
          <li className="menu-title">
            <span>Options</span>
          </li>
          <li>
            <Link href="/english/short-story">Short Story</Link>
          </li>
          <li>
            <Link href="/english/sentences">Sentences</Link>
          </li>
          <li>
            <Link href="/english/synonyms-antonyms">Synonyms & Acronyms</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
