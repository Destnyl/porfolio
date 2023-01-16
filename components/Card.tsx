import { ReactElement } from "react";

interface CardContent { 
    children?: ReactElement
}

const Card = (props: CardContent) => {
    return ( 
        <div className="2xl:container bg-stone-900 p-4  m-4 rounded-2xl flex flex-col gap-y-4 break-all text-center shadow-sm shadow-emerald-600 items-center">
            {props.children}
        </div>
     );
}
 
export default Card;