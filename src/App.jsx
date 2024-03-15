import './App.css'
import {useState} from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WriteWords } from './components/WriteWords' 
import { usePlaying } from './hooks/usePlaying'

function App() {

  const [playing, setPlaying] = usePlaying()

  return (<div className="flex justify-center items-center flex-col">
    <Header/>
    <WriteWords playing = {playing} setPlaying = {setPlaying}/>
    <Footer/>
  </div>
  )
}

export default App
