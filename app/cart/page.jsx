import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'
import CartImage from '../../public/assets/empty-cart.jpg';
import Link from 'next/link';

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-light">
            Shopping Cart
          </div>
        </div>
        {/* HEADING AND PARAGRAPH START */}

        {/* CART CONTENT START HERE */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* CART ITEM START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* CART ITEM END */}

          {/* SUMMARY START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">Subtotal</div>
                <div className="text-md md:text-lg font-medium text-black">
                  Rs. 19,695.00
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5">
                The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering. Defaults to
              </div>
            </div>

            <div className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 text-center cursor-pointer">
              Checkout
            </div>
          </div>
          {/* SUMMARY END */}
        </div>
        {/* CART CONTENT END HERE */}

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
          <Image src={CartImage} width={300} height={300} className="w-[300px] md:w-[400px]" />

          <span className="text-xl font-bold">Your cart is Empty</span>

          <span className="text-center mt-4">Looks like you have not adding anything in your cart <br />
            Go Ahead and explore top Categories
          </span>

          <Link href="/" className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default Cart