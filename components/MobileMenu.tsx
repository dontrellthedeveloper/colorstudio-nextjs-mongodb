import Link from 'next/link';
import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 -right-20 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
      
          <Link href='/browse'>Browse</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
        
          <Link href='/popular'>New & Popular</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link href='/genre/action'>Action</Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/comedy'>Comedy</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/drama'>Drama</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/horror'>Horror</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/thriller'>Thriller</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/animation'>Animation</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/crime'>Crime</Link>
          
        </div>
        <div className="px-3 text-center text-white hover:underline">
        <Link href='/genre/documentaries'>Documentary</Link>
          
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;