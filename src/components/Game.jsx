import { useLetters } from "../hooks/useLetters"
import { AiFillClockCircle } from 'react-icons/ai'

export function Game ({text, cursor, correctArray, time}) {

  const letters = useLetters(text, cursor, correctArray)

  return(<div className=" w-11/12 bg-emerald-50 flex flex-col relative items-center my-10 rounded-lg">
        <div>
          <h1 className=" text-4xl font-bold m-10 text-green-950">
            Write
          </h1>
          <div className="flex flex-row my-12 gap-1 bg-emerald-200 p-2 rounded-xl absolute -top-8 right-3">
            <AiFillClockCircle className="w-5 h-5 fill-emerald-700"/>
            <h1 className=" text-lg -my-[0.2rem] font-bold text-emerald-700">{time}s</h1>
          </div>
        </div>
        <div className="flex flex-wrap m-7 mt-2 font-mono text-green-800 font-bold text-2xl underline underline-offset-2 text-left gap-[0.12rem]">
          {letters.map(letter => letter)}
        </div>
        {cursor}/{text.length}
    </div>
    )
}