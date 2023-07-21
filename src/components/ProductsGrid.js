import React from 'react'
import Items from './Items'



function ProductsGrid() {
    const items = [
      {
        id: 1,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937373/organic_Hair_oil_zqtka4.png",

        text: "Mixed Herb Hair Oil Moringa Leaf Hair Oil Ginkgo Biloba Hair Oil Amla Hair Oil Onion Hair Oil",
      },
      {
        id: 2,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Face_cream_ioxpwd.png",

        text: "Fair white cream Rice cream Hibiscus cream Aloe vera cream Vitamin C cream Turmeric cream Jhumpa special cream",
      },
      {
        id: 3,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Sampoo_nrhcck.png",

        text: "Onion shampoo Anti hair fall shampoo Keratin smooth shampoo Jhumpa special shampoo",
      },
      {
        id: 4,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937373/organic_Face_wash_jl9om1.png",

        text: "Aloe vera face wash Charcoal face wash Mixed fruit face wash Mixed herb face wash Turmeric face wash Jhumpa special face wash Neem face wash",
      },
      {
        id: 5,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Serum_vyqzha.png",

        text: "Vitamin c serum Niacinamite serum Guava serum Jhumpa special serum",
      },
      {
        id: 6,

        link: "https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Toner_zzkvf7.png",

        text: "Green tean toner Vitamin c toner Jhumpa special toner",
      },
    ];

  return (
    <div>
      <div className="w-[90vw] grid grid-col-3 gap-20">
       {items.map(({id,link,text}) => (
           <Items id={id} link={link} text={text} />
       ))}
        </div>
      
    </div>
  );
}

export default ProductsGrid