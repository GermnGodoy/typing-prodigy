

export function Menu ({setPlaying, specialMode, setSpecialMode}) {

  const handleChange = () => {
    setSpecialMode(specialMode => !specialMode)
  }
  
  console.log(specialMode)

  return (
    <div className=" w-11/12 bg-emerald-100 flex flex-col justify-center items-center my-10 rounded-lg">
      <h1 className=" text-2xl font-bold m-10 mb-6 text-green-950">
        Touch 
        {
          specialMode 
            ? <code className="m-1 text-2xl text-blue-100  px-2 py-1 rounded-md border-solid border-sky-200 border-2 bg-gradient-to-l to-blue-600 from-sky-600" onClick={() => (setPlaying(true))}>
              Start
            </code> 
            : <code className="m-1 text-2xl text-emerald-200  px-2 py-1 rounded-md border-solid border-emerald-200 border-2 bg-gradient-to-l to-emerald-800 from-green-800" onClick={() => (setPlaying(true))}>
              Start
            </code>
        }
        
        when you want to start playing.
      </h1>
      <div className="flex flex-row align-middle justify-center">
        <h1 className="mx-2 font-sans font-bold text-xl text-emerald-900 opacity-50">Alternative mode &rarr;</h1>
        <label className="mt-1 mx-0 relative inline-flex items-center cursor-pointer mb-10">
            <input type="checkbox" value={specialMode} className="sr-only peer" onChange={handleChange}/>
            <div className=" w-11 h-6 bg-emerald-700 peer-focus:outline-none peer-focus:ring-1 peer-focus:peer-checked:ring-blue-300 peer-focus:ring-emerald-300 rounded-full peer dark:bg-emerald-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
        </label>
      </div>
    </div>
  )
}