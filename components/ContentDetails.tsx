import Button from "./base/button";
import { useRouter } from 'next/router'
import { MouseEventHandler } from "react";
import { TypeAnimation } from 'react-type-animation';
interface Details {
    preLabel?: string
    title: string,
    description: string,
    btnLabel: string,
    fontSize: string,
    hasAnimation?: boolean

    fn: MouseEventHandler<HTMLButtonElement> | undefined
}

const Details = ({hasAnimation, preLabel, title, description, btnLabel, fontSize, fn}: Details) => {

    return ( 
        <div className="flex flex-col gap-y-8">
        <section className="text-7xl">
            { preLabel ? <p>{preLabel}</p> : <p/> }

            { hasAnimation 
            ? <TypeAnimation
              sequence={[
                `${title}`,
                1000,
                "Web Developer"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            : <p>{title}</p>
            }
        </section>
        <section className={"description " + fontSize}>
            {description}
        </section>
        <div>
        <Button
            label={btnLabel}
            fn={fn}
        />
        </div>
    </div>
     );
}
 
export default Details;