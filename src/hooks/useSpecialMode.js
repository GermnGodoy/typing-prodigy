import { useState } from "react"

export function useSpecialMode () {
  const [specialMode, setSpecialMode] = useState(false)
  return [specialMode, setSpecialMode]
}
