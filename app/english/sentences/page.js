"use client";

import { useState } from "react";
import { useSentences } from "../../../hooks/useSentences";

export default function Sentences() {
  const [words, setWords] = useState([""]);
  const { result, generate } = useSentences({ url: "/api/sentences/generate" });

  const onSubmit = () => {
    generate(words);
  };

  const onChangeInput = (index) => (e) => {
    const changedWords = [...words];
    changedWords[index] = e.target.value;
    setWords(changedWords);
  };

  const onAddInput = () => {
    setWords([...words, ""]);
  };

  const onRemoveInput = (index) => () => {
    const otherWords = [...words];
    otherWords.splice(index, 1); // delete 1 element at index
    setWords(otherWords);
  };

  return (
    <>
      <div className="form-control w-3/4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Sentence Generator</h1>
        <div className="flex flex-col gap-2">
          {words.map((word, index) => (
            <div className="flex flex-row gap-4" key={index}>
              <input
                className="input"
                onChange={onChangeInput(index)}
                placeholder="Your word"
                value={word}
              ></input>
              <button
                className="btn btn-success font-bold"
                onClick={onAddInput}
              >
                +
              </button>
              <button
                className="btn btn-error font-bold"
                onClick={onRemoveInput(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
        <button className="btn btn-indigo rounded-full" onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
      <div className="h-36">
        <h2 className="text-2xl">Your Sentences: </h2>
        <p>{result}</p>
      </div>
    </>
  );
}
