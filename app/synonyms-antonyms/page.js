"use client";

import { useEffect, useRef, useState } from "react"


export default function SynonymsAcronyms() {

  const textRef = useRef(null); // hooking text, i.e.  textRef = textarea below
  const [words, setWords] = useState(""); // array of words
  const [result, setResult] = useState("");

  let wordArray = [];

  const onButtonClick = () => { // when button is clicked
    if (textRef.current) {  // if there is something in the textarea
      wordArray.push
      setWords(textRef.current.value); // set words = textarea value
    }
  }

  useEffect(() => {
    if (words !== "") {
      fetch("/api/generate-synonyms-antonyms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({words: words}),
      }).then((res) => res.json())
        .then((data) => {
          setResult(data.result);
        })
    }
  }, [words]);


  return (
    <main>
      <div className="flex flex-col gap-6 card bg-indigo-100 w-3/4 p-4">
        <div className="form-control w-3/4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Synonym & Antonym Generator</h1>
          <input className="input" ref={textRef} placeholder="Your word"></input>
          <button className="btn btn-indigo rounded-full" onClick={onButtonClick}>
            SUBMIT
          </button>
        </div>
        <div className="h-36">
          <h2 className="text-2xl">Your Synonyms and Antonyms: </h2>
          <p>{result}</p>
        </div>
      </div>
    </main>
  );
}