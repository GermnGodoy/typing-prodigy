import { useEffect, useState } from "react"

export function useTime (playing, win) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    let intervalID
    if (playing && !win) {
    intervalID = setInterval(() => setTime((time) => time+1),1000)
    }
      
    return () => clearInterval(intervalID)
  }, [playing, time])

  return time
}