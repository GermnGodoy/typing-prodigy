import { checkWords } from "../logic/checkWords"
import { useEffect, useState } from "react";

export function useTextWritten (text, specialMode, playing) {
  const [textWritten, setTextWritten] = useState('')
  const [cursor, setCursor] = useState(0)
  const [correctArray, setCorrectArray] = useState(Array(500).fill(0))


  useEffect(() => {
    const keyDownHandler = event => {
      if (!playing) return
      if (event.key === 'Backspace') {
        setTextWritten(smt => smt.slice(0,-1))
        setCursor(cursor => cursor - 1)
      } else if (event.key === 'Control' || event.key === 'Shift' || event.key === 'CapsLock') {
        // pass
      } else {
        let nextTextWritten = textWritten + event.key
        console.log(`cursor#${cursor} => ${text[cursor]}`)
        if (!specialMode || text[cursor] === event.key) {
          setTextWritten(textWritten => {
            nextTextWritten = textWritten + event.key
            checkWords(text, nextTextWritten, setCorrectArray)
            return nextTextWritten
          })
          setCursor(cursor => cursor + 1)
        }
      }
    };
    
    document.addEventListener('keydown', keyDownHandler);
    
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [text, cursor, specialMode, playing]);

  return [cursor, correctArray]
}