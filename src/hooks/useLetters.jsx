import { useState, useEffect } from "react";

export function useLetters (text, cursor, correctArray) {
  const [letters, setLetters] = useState([])
  useEffect(() => setLetters(text.split('').map((letter, index) =>{
      if (letter === ' ') {
        if (correctArray[index] === 2) {
          return (
            <p key={`${letter}${index}`} className="opacity-100 p-2  bg-red-200 rounded-lg">
              {'   '}
            </p>
          )
        } else if (index === cursor) {
          return (
            <p key={`${letter}${index}`} className="opacity-100 p-2 bg-emerald-200 rounded-lg animate-blink bg-opacity">
              {'   '}
            </p>
          )
        } else {
          return (
            <p key={`${letter}${index}`} className="opacity-100 p-2">
              {'   '}
            </p>
          )
        }
      } else if (correctArray[index] === 1) {
        return (
          <p key={`${letter}${index}`} className="opacity-100 p-[0.125rem]">
            {letter}
          </p>
        )
      } else if (correctArray[index] === 2) {
        return (
          <p key={`${letter}${index}`} className="opacity-80 text-red-500 p-[0.125rem]">
            {letter}
          </p>
        )
      } else if (index === cursor) {
        return (
          <p key={`${letter}${index}`} className="opacity-100 bg-emerald-200 p-[0.125rem] rounded-lg animate-blink bg-opacity">
            {letter}
          </p>)
      }else {
          return (<p key={`${letter}${index}`} className="opacity-50 p-[0.125rem]">
            {letter}
          </p>)
      }
    })),
    [text, cursor, correctArray]
  )

  return letters

}