import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="../assets/product-1.webp" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-md md:text-2xl font-bold text-black/[0.8]">Jordon Retro 6G</div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">{`Men's Golf Shoes`}</div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : 19,599.00
          </div>

          {/* PRODUCT SIZE SELECT */}

        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">

            <div className="flex items-center gap-1">
              <div className="font-semibold">Size : </div>
              <select className="hover:text-black">
                <option value="6">UK 6</option>
                <option value="6.5">UK 6.5</option>
                <option value="7">UK 7</option>
                <option value="7.5">UK 7.5</option>
                <option value="8">UK 8</option>
                <option value="8.5">UK 8.5</option>
                <option value="9">UK 9</option>
                <option value="9.5">UK 9.5</option>
                <option value="10">UK 10</option>
                <option value="10.5">UK 10.5</option>
                <option value="11">UK 11</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity : </div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>


          </div>

          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>

      </div>
    </div>
  )
}

export default CartItem