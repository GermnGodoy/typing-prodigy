export function checkWords(text, textWritten, setCorrectArray) {
  const smt = text.split('').map((letter, index) => {
    if (!textWritten.split('')[index]) {
      return 0
    } else if (letter === textWritten.split('')[index]) {
      return 1
    } else {
      return 2
    }
  })
  setCorrectArray(smt)
}