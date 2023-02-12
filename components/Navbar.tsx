import Image from "next/image";
import Link from "next/link";
import imageURL from '../public/Logo.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/work', current: false },
  // { name: 'Contact', href: '/contact', current: false }
]

const Navbar = () => {
  return ( 
    <nav className="2xl:container flex gap-x-8 justify-between p-7 bg-stone-900 fixed left-0 right-0 drop-shadow-lg">
      <div className="logo flex flex-row gap-x-1.5 items-center">
      <Image
          src={imageURL}
          width={20}
          height={20}
          alt='Project'
      />
        <h1 className="text-3xl font-mono">Andrea Destajo</h1>
      </div>
      <div className="flex gap-x-8 text-xl font-mono ">
      { 
        navigation.map((item) => (
          <Link 
            className="hover:text-emerald-600  hover:border-t-4 "
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