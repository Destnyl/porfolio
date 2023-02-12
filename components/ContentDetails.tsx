import Button from "./base/button";
import { useRouter } from 'next/router'
import { MouseEventHandler } from "react";
interface Details {
    title: string,
    description: string,
    btnLabel: string,
    fontSize: string,
    fn: MouseEventHandler<HTMLButtonElement> | undefined
}

const Details = ({title, description, btnLabel, fontSize, fn}: Details) => {
    const router = useRouter()

    return ( 
        <div className="flex flex-col gap-y-8">
        <section className="text-7xl">
            <p>{title}</p>
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