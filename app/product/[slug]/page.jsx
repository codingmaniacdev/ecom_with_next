import ProductDetailCarousel from '@/components/ProductDetailCarousel'
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const Product = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:max-0">
            <ProductDetailCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordon Metro 6G
            </div>
            {/* product title */}

            {/* product subtitle */}
            <div className="text-md font-semibold mb-5">
              {`Men's Golf Shoes`}
            </div>
            {/* product subtitle */}

            {/* product price */}
            <div className="text-md font-semibold">
              MRP : 19500.00
            </div>

            <div className="text-sm font-medium text-black/[0.5]">
              Incl. of All Taxes
            </div>

            <div className="text-sm font-medium text-black/[0.5] mb-20">{`(Also Includes All applicable duties)`}</div>
            {/* product price */}

            {/* product size range chart */}
            <div className='mb-10'>
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* size chart */}
              <div className="grid grid-cols-3 gap-2">

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11
                </div>

                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11.5
                </div>

              </div>
              {/* size chart  end*/}
            </div>
            {/* product size range chart */}

            {/* SHOW ERROR START */}
            <div className="text-red-600 mt-1 text-sm mb-4">
              Size selection is required
            </div>
            {/* SHOW ERROR END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Add to Cart</button>
            {/* ADD TO CART BUTTON END */}
            {/* ADD TO WISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* ADD TO WISHLIST BUTTON END */}



            <div>
              <div className="text-lg font-extrabold mb-5">
                Product Details
              </div>

              <div className="text-md mb-5">
                Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite.
              </div>

              <div className="text-md mb-5">
                Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite.
              </div>

            </div>
          </div>
          {/* right column end */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  )
}

export default Product