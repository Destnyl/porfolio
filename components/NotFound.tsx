import Image from 'next/image';
import imageUrl from '../public/shock.png'
const NotFound = () => {
    return ( 
        <div className="text-center flex flex-col items-center h-screen justify-center">
            <Image
                src={imageUrl}
                width="300"
                height="300"
                alt=""
            />
            <h1>Page Not Found!</h1>
        </div>
     );
}
 
export default NotFound;