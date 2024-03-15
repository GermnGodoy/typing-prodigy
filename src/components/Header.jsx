import styles from '../index.css?inline'

export function Header() {
  return (
    <div className="bg-gradient-to-l to-emerald-200 from-green-200 h-1/12 min-h-min flex w-screen justify-center p-6  pb-9 items-center rounded-bl-2xl rounded-br-2xl">
      <h1 className=" text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text font-extrabold text-6xl p-3 -m-3">
        Typing prodigy
      </h1>
    </div>
  )
}