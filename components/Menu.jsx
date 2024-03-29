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

const Menu = ({ showCatMenu, setShowCatMenu, category }) => {
  return (
    <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
      {data && data.map((item) => (
        <React.Fragment key={item.id}>
          {
            !!item?.subMenu ? (
              <li className="cursor-pointer flex items-center gap-2 relative text-sm"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item?.name}
                <BsChevronDown />
                {showCatMenu && (
                  <ul className='bg-white absolute top-5 min-w-[250px] px-1 text-black shadow-lg'>
                    {category.map(({ attributes: c, id }) => (
                      <Link key={id} href={`/category/${c.slug}`} className="block">
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md text-sm">{c.name}
                          <span className='opacity-50 text-xs'>({c?.products?.data?.length})</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.id} className='cursor-pointer text-sm'>
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )
          }
        </React.Fragment>
      ))}
    </ul>
  )
}

export default Menu;
