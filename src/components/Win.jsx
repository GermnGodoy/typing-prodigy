import { AiFillClockCircle } from 'react-icons/ai'

export function Win ({text, time, correctArray}) {
  return (
    <div className=" w-11/12 bg-emerald-50 flex flex-col relative items-center my-10 rounded-lg">
          <div className="" >
            <h1 className=" text-4xl font-bold m-10 text-green-900 mt-20">
              Congratulations!!
            </h1>
            <div className="flex flex-row my-12 gap-1 bg-emerald-200 p-2 rounded-xl absolute -top-8 right-3">
              <AiFillClockCircle className="w-5 h-5 fill-emerald-700"/>
              <h1 className=" text-lg -my-[0.2rem] font-bold text-emerald-700">{time}s</h1>
            </div>
            <div className=" text-emerald-900 opacity-60 text-lg mb-8 font-semibold text-center" >
              <p>Letters written ~ {text.length}</p>
              <p>Words written ~ {text.split(' ').length}</p>
              <p>Correct letters ~ {correctArray.filter(v => (v === 1)).length}</p>
              <p>Failed letters ~ {correctArray.filter(v => (v === 2)).length}</p>
              <p>Time ~ {time}</p>
              <p>Words per min ~ {(text.split(' ').length * 60 / time).toFixed(2)}</p>
              <p>Char per second ~ {(text.length / time).toFixed(2)}</p>
            </div>
          </div>
    </div>

  )
}
