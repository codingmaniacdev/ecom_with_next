import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetcher } from "@/utils/api";

async function getProduct(endpoint) {
  const response = await fetcher(endpoint);
  return response;
}

export default async function Home() {

  const { data } = await getProduct("/api/products?populate=*");
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-light">
            Cushioning for Your Miles
          </div>
          <div className="text-sm md:text-sm">
            A lightweight Nike ZoomX midsole is combines with increased stack heights to help provide cushioning during extended stretches of running
          </div>
        </div>
        {/* heading and paragraph  end*/}

        {/* products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data && data?.map((product) => (
            <ProductCard key={product.key} data={product} />
          ))}
        </div>
        {/* products */}
      </Wrapper>

    </main>
  );
}

