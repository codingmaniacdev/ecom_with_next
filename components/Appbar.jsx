"use client";

import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from '../public/assets/logo.svg'
import Link from "next/link";
import Menu from "./Menu";

import { BsCart3, BsHeart } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

const Appbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`w-full h-[50px] md:h-[50px] bg-white flex justify-between items-center z-20 sticky top-0 transition-transform duration-300 ${show} shadow-sm`}>
      <Wrapper className={`h-[50px] flex justify-between items-center`}>
        <Link href={`/`}>
          <Image src={logo} className={`w-[40px] md:w-[60px]`} alt="..." />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MobileMenu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />
        )}


        {/* icon start */}
        <div className="flex items-center gap-2 text-block">
          <Link href="wishlist">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex justify-center items-center hover:bg-block/[0.05] cursor-pointer relative">
              <BsHeart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
            </div>
          </Link>

          <Link href={`../cart`}>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-block/[0.05] cursor-pointer relative">
              <BsCart3 className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
            </div>
          </Link>

          {/* mobile icon start */}
          <div className="w-8 h-8 md:h-12 md:w-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose className="text-[20px]" onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className="text-[24px]" onClick={() => setMobileMenu(true)} />
            )}
          </div>
          {/* mobile icon start */}
        </div>

        {/* icon start */}

      </Wrapper>
    </header>
  )
}

export default Appbar