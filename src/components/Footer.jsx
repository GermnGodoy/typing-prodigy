import styles from '../index.css?inline'

export function Footer () {
  return (
    <div className="bg-gradient-to-l to-emerald-200 from-green-200 h-1/12 min-h-min flex w-screen justify-center p-6 items-center rounded-tl-2xl rounded-tr-2xl absolute bottom-0">
      <h1 className=" text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text font-extrabold text-xl p-3 -m-3">
        This is the footer where you could add everything that you want
      </h1>
    </div>
  )
}