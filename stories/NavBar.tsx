import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import PropTypes from "prop-types";


const NavBar = ({ title, about, projects, blogs, contact, background, textcolor }: any): JSX.Element => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className={`w-full fixed top-0 left-0 right-0 z-10`}
              style={{backgroundColor: background}}>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div className="flex justify-between">
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <Image
                  width={28}
                  height={28}
                  src={Logo}
                  alt='logo'
                  title='logo'
                />
              </Link>
            </div>

            {/* TITLE */}
            <div className="ml-8 flex items-center text-center">
              <h1 className="md:block hidden text-xl" style={{color: textcolor}}>{title}</h1>
            </div>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className='md:hidden'>
                <button
                  className='p-2 text-green-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={30} />
                  ) : (
                    <AiOutlineMenu size={30} />
                  )}
                </button>
              </div>
          </div>
          {/* SECTIONS */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
              
            >
              <ul className='h-screen md:h-auto items-center justify-center md:flex '>
                <li className='pb-4 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-green-900  border-green-900  md:hover:text-green-600 md:hover:bg-transparent' style={{color: textcolor}}>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    {about}
                  </Link>
                </li>
                <li className='pb-4 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent' style={{color: textcolor}}>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    {blogs}
                  </Link>
                </li>
                <li className='pb-4 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent' style={{color: textcolor}}>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    {contact}
                  </Link>
                </li>
                <li className='pb-4 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent' style={{color: textcolor}}>
                  <Link href='#' onClick={() => setNavbar(!navbar)}>
                    {projects}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;


NavBar.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
};