import Image from "next/image";
import Link from "next/link";
import imageURL from '../public/Logo.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Work', href: '/work', current: false },
  { name: 'Contact', href: '/contact', current: false }
]

const Navbar = () => {
  return ( 
    <nav className="2xl:container flex gap-x-8 justify-between p-4 bg-stone-900 fixed left-0 right-0 drop-shadow-lg">
      <div className="logo flex flex-row gap-x-1.5 items-center">
      <Image
          src={imageURL}
          width={20}
          height={20}
          alt='Project'
      />
        <h1>Andrea Destajo</h1>
      </div>
      <div className="flex gap-x-8">
      { 
        navigation.map((item) => (
          <Link 
            href={item.href}
            key={item.name}
          >
            {item.name}
          </Link>
        )) 
      }
      </div>
    </nav>
   );
}
 
export default Navbar;