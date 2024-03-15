import { useState } from 'react'

export function usePlaying() {
  const [playing, setPlaying] = useState(false)
  return [playing, setPlaying]
}