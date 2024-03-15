import { useTime } from '../hooks/useTime'
import {useText} from '../hooks/useText'
import {useWin} from '../hooks/useWin'
import { useTextWritten } from "../hooks/useTextWritten"
import { useSpecialMode } from '../hooks/useSpecialMode'
import { Menu } from "./Menu"
import { Game } from './Game'
import { Win } from './Win'

export function WriteWords ({playing, setPlaying}) {
  
  const [specialMode, setSpecialMode] = useSpecialMode()
  const text = useText()
  const [cursor, correctArray] = useTextWritten(text, specialMode, playing)
  const win = useWin(cursor, text)
  const time = useTime(playing, win)
  

  if (!playing) {
  return(
    <Menu setPlaying = {setPlaying} specialMode={specialMode} setSpecialMode = {setSpecialMode}/>
  )
  } else {
    if (!win) {
      return (
        <Game cursor = {cursor} text={text} correctArray={correctArray} time={time}/>
      )
    } else {
      return (
        <Win time = {time} text = {text} correctArray = {correctArray}/>
      )
    }
  }
}
