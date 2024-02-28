import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className={`flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc[100vh-50px]] bg-white border-t text-black`}>
      {data && data.map((item) => (
        <React.Fragment key={item.id}>
          {
            !!item?.subMenu ? (
              <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative text-xs font-medium'
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className='flex justify-between items-center'>
                  {item?.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                    {subMenuData.map((submenu) => (

                      <li className="py-4 px-8 border-t flex justify-between text-xs">{submenu.name}
                        <Link key={submenu.id} href="/" onClick={() => { setShowCatMenu(false); setMobileMenu(false) }}>
                          <span className='opacity-50 text-xs'>({submenu.doc_count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.id} className='py-4 px-5 border-b text-sm'>
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item?.name}</Link>
              </li>
            )
          }
        </React.Fragment>
      ))}
    </ul>
  )
}

export default MobileMenu;
