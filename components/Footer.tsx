import Image from "next/image";
import logoURL from '../public/Logo.svg'
import LinkedInLogo from '../public/LinkedIn.png'
import fbLogo from '../public/Facebook.png'
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
        <h1>Copyright © 2023 AndreaDestajo</h1>
      </div>
      <div className="flex flex-row gap-x-7 items-center">
        <a href="https://web.facebook.com/andrealyn.destajo" target="_blank" rel="noreferrer">
        <Image
            className="cursor-pointer"
            src={fbLogo}
            width={50}
            height={50}
            alt='Project'
        />
        </a>
      <a href="https://www.linkedin.com/in/andrea-destajo-828317139/" target="_blank" rel="noreferrer">
      <Image
          className="cursor-pointer"
          src={LinkedInLogo}
          width={50}
          height={50}
          alt='Project'
      />
      </a>
      <a href="tel:+639985338417">
        <Image
            className="cursor-pointer"
            src={whatsappLogo}
            width={50}
            height={50}
            alt='Project'
        />
      </a>
      
      </div>
    </div>
  );
}

export default Footer