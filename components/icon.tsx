import Image from 'next/image';

const Icon = (props : any) => {
    return ( 
        <div className="text-center flex flex-col items-center bg-stone-900 rounded-full p-4 border border-emerald-700">
            <Image
                src={props.url}
                width="30"
                height="30"
                alt=""
            />
        </div>
     );
}
 
export default Icon;