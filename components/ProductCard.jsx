import { getDiscountPercentage } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link href={`/product/${p?.slug}`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <Image width={500} height={500} src={p.thumbnail.data[0].attributes.url} alt={p?.name} />
      {/* <img src="../assets/product-1.webp" className="w-full" alt="..." /> */}
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-md font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-sm font-semibold flex items-center"><MdCurrencyRupee /> {p?.price.toFixed(2)}</p>
          {p?.original_price && (
            <>
              <p className="text-xs font-medium line-through flex items-center"><MdCurrencyRupee /> {p?.original_price.toFixed(2)}</p>
              <p className="ml-auto text-sm font-medium text-green-500">{getDiscountPercentage(p.original_price, p.price)}</p>
            </>
          )}

        </div>
      </div>
    </Link>
  )
}

export default ProductCard