export const Btngroup = ({text,changeIndex,activeClass,}) => {
  return(
    <>
       <button onClick={changeIndex}   className={`text-lg font-bold ${activeClass ?"text-black" : "text-gray-500"}`} type="button">{text}</button>
    </>
  )
} 