import React from 'react'
import ProductsGrid from './ProductsGrid'

function Products() {
  return (
    <div
      name="products"
      className="pt-10 md:pb-40 md:pt-0 flex flex-col justify-center items-center mx-auto"
    >
      <div className="flex flex-col justify-center items-center mx-auto">
        <img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689936458/more_in_our_Herbal_collection_tqjrvy.png"></img>
        <h1 className="text-black text-center text-3xl font-normal leading-[43px] tracking-[-0.9px] mt-3">
          coming soon!
        </h1>
      </div>

      <div className="mt-16">
        <ProductsGrid />
      </div>
    </div>
  );
}

export default Products