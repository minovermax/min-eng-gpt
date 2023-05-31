import { useState } from "react";

export const useSentences = ({ url }) => {
  const [result, setResult] = useState("");

  const generate = (words) => {
    if (words !== "") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ words: words }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data.result);
        });
    }
  };

  return {
    result,
    generate,
  };
};
