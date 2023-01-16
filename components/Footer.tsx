import Image from "next/image";
import imageURL from '../public/Logo.svg'

function Footer() {

  return (
    <div className="2xl:container flex gap-x-8 justify-between p-4 bg-stone-900 ">
      <div className="logo flex flex-row gap-x-1.5 items-center">
      <Image
          src={imageURL}
          width={20}
          height={20}
          alt='Project'
      />
        <h1>Copyright © 2022 AndreaDestajo</h1>
      </div>
    </div>
  );
}

export default Footer