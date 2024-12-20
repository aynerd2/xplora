import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => (
<footer className="bg-primary text-white py-8 px-6 lg:px-32">


  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
    

    {/* First container item */}
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8 md:mb-0">
      <nav className="flex flex-col items-start gap-4">
        <p className="font-graphik text-white text-custom">Fingertipe</p>
        <ul className="flex flex-col items-start gap-2 list-none">
          <Link href="" className="font-graphik text-white text-basic">Home</Link>
          <Link href="" className="font-graphik text-white text-basic">Examples</Link>
          <Link href="" className="font-graphik text-white text-basic">Pricing</Link>
          <Link href="" className="font-graphik text-white text-basic">Updates</Link>
        </ul>
      </nav>

      <nav className="flex flex-col items-start gap-4">
        <p className="text-custom font-graphik text-white">Resources</p>
        <ul className="flex flex-col items-start gap-2 list-none">
          <Link href="" className="font-graphik text-white text-basic">Home</Link>
          <Link href="" className="font-graphik text-white text-basic">Examples</Link>
          <Link href="" className="font-graphik text-white text-basic">Pricing</Link>
          <Link href="" className="font-graphik text-white text-basic">Updates</Link>
        </ul>
      </nav>

      <nav className="flex flex-col items-start gap-4">
        <p className="text-custom font-graphik text-white">About</p>
        <ul className="flex flex-col items-start gap-2 list-none">
          <Link href="" className="font-graphik text-white text-basic">Home</Link>
          <Link href="" className="font-graphik text-white text-basic">Examples</Link>
          <Link href="" className="font-graphik text-white text-basic">Pricing</Link>
          <Link href="" className="font-graphik text-white text-basic">Updates</Link>
        </ul>
      </nav>

    </div>


    {/* Second container item */}

    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-row items-center gap-2">
        <IoLocationSharp className="text-3xl" />
        <p className="font-graphik text-white text-custom">7480 Mockingbird Hill undefined</p>
      </div>

      <div className="flex flex-row items-center gap-2">
        <FaMobileScreen className="text-3xl" />
        <p className="font-graphik text-white text-custom">(239) 555-0108</p>
      </div>

      <div className="flex flex-row justify-start items-center gap-4">
  <IoLogoTwitter className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
  <BiLogoFacebookSquare className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
  <FaLinkedin className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
</div>

    </div>

  </div>
</footer>


    );
    
    export default Footer;
    