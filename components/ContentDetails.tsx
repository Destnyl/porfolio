import { ReactElement } from "react";
import Button from "./base/button";
import { useRouter } from 'next/router'

interface Details {
    title: string,
    description: string,
    btnLabel: string,
    url: string,
    fontSize: string
}

const Details = ({title, description, btnLabel, url, fontSize}: Details) => {
    const router = useRouter()

    const handleClick = () => {
        window.open(url);
      }

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
            fn={handleClick}
        />
        </div>
    </div>
     );
}
 
export default Details;