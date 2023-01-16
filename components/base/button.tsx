import { MouseEventHandler } from "react";

enum ButtonTypes {
  "button",
  "submit",
  "reset",
  undefined
} 

interface BtnLabel {
  label: String
  // btnType: ButtonTypes
  fn: MouseEventHandler<HTMLButtonElement> | undefined
}
const Button = ({label='label', fn}: BtnLabel) => {
    return ( 
        <button
        onClick={fn}
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-orange-500 hover:to-orange-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm uppercase"
      >
        {label}
      </button>
     );
}
 
export default Button;