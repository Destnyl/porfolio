import Image from "next/image";
import logoURL from '../public/Logo.svg'
import fbLogo from '../public/LinkedIn.png'
import LinkedInLogo from '../public/Facebook.png'
import whatsappLogo from '../public/Whatsapp.png'

function Footer() {

  return (
    <div className="flex gap-x-8 justify-between p-4 bg-stone-900 ">
      <div className="logo flex flex-row gap-x-1.5 items-center">
      <Image
          src={logoURL}
          width={20}
          height={20}
          alt='Project'
      />
        <h1>Copyright © 2022 AndreaDestajo</h1>
      </div>
      <div className="flex flex-row gap-x-7 items-center">
      <Image
          className="cursor-pointer"
          src={LinkedInLogo}
          width={50}
          height={50}
          alt='Project'
      />
      <Image
          className="cursor-pointer"
          src={fbLogo}
          width={50}
          height={50}
          alt='Project'
      />
      <Image
          className="cursor-pointer"
          src={whatsappLogo}
          width={50}
          height={50}
          alt='Project'
      />
      </div>
    </div>
  );
}

export default Footer