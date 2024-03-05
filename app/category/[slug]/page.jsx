import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { fetcher } from '@/utils/api';
import React from 'react'

async function getProductBySlug(endpoint) {
  const response = await fetcher(endpoint);
  return response;
}

async function getCategoryBySlug(endpoint) {
  const response = await fetcher(endpoint);
  return response;
}

const Category = async ({ params }) => {

  const category = await getCategoryBySlug(`/api/categories?filters[slug][$eq]=${params.slug}`);
  const { data } = await getProductBySlug(`/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=3`);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] md-5 font-semibold leading-light capitalize">
            {category?.data[0]?.attributes.name}
          </div>
        </div>
        {/* products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data && data.map((product) => (
            <ProductCard key={product.key} data={product} />
          ))}

          {/*  */}
        </div>
        {/* products */}
      </Wrapper>
    </div>
  )
}

export default Category