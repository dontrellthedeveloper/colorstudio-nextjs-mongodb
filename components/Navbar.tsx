import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';

import AccountMenu from '../components/AccountMenu';
import MobileMenu from '../components/MobileMenu';
import NavbarItem from '../components/NavbarItem';
import DropdownMenu from './DropdownMenu';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    //   console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <Link href='/'>
        <img src="/images/logo-3.png" className="h-14 lg:h-14" alt="Logo" />
        </Link>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">

          <Link href='/'>
            <NavbarItem label="Home" active />
          </Link>

          <div onClick={toggleMobileMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <p className="text-white">Genre</p>
            <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
            <DropdownMenu visible={showMobileMenu} />
          </div>
          <Link href='/popular'>
          <NavbarItem label="New & Popular" />
          </Link>



          <Link href='/browse' className='ml-auto'>
          <NavbarItem label="Browse" />
          </Link>

        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell className="w-6" />
          </div> */}
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            {/* <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div> */}
            {/* <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} /> */}
            {/* <AccountMenu visible={showAccountMenu} /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;