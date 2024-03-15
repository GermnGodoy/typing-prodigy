import {useEffect, useState} from 'react'

export function useText() {

  const [text, setText] = useState('')

  useEffect( () => {
    if (text == '') {
      const URL = 'https://random-word-api.herokuapp.com/word?number=10'
      fetch(URL)
        .then(res => res.json())
        .then(json => setText(json.join(' ')))
      }
    },[])
  return text
}