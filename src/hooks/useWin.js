import { useState } from "react";

export function useWin(cursor, text) {
  const [win, setWin] = useState(false)
  if (!win && cursor >= text.length && text.length > 5) {
    setWin(true)
  }
  return win
}
