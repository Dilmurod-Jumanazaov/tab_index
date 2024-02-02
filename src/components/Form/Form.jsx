import { useState } from "react"
import { Btngroup } from "../Btngroup/Btngroup";

const TAB_TEXT = ["Positive","Negative","Neutral"];


export const Form = () => {

  const [btnIndex,setBtnIndex] = useState(0);

  function formSubmit(evt) {
    evt.preventDefault();

    const inputValue = evt.target[0].value;
    evt.target[0].value = "";
    if(inputValue <= 0 || inputValue > 3) {
      alert("Invalid index");
      return;
    }
    setBtnIndex(inputValue - 1);
  }

  return(
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="form__wrapper border p-8 rounded-lg bg-slate-100">
          <form onSubmit={formSubmit}  className="form-control flex items-center gap-3 mb-5">
            <input className="w-80 p-2 border-solid border-0 border-b-2 border-b-gray-400 bg-transparent placeholder:text-gray-500 font-medium focus: focus:ring-0" type="number" name="id" aria-label="Enter tab index" placeholder="Enter tab index" required />
            <button className="max-w-32 p-2 rounded-md font-medium bg-gray-300"  type="submit">Change tab</button>
          </form>
          <div className="flex items-center gap-4 mb-4">
            {
              TAB_TEXT.map((item,index) => 
                (
                  <Btngroup key={index} changeIndex={() => setBtnIndex(index)} text={item} activeClass={btnIndex == index} />
                )
              )
            }
          </div>
          <p className="text-base font-medium">{TAB_TEXT[btnIndex]} content</p>
        </div>
      </div>
    </>
  )
}