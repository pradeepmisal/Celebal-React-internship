import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreProvider";
import Title from "../common/Title";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { catalog } = useContext(StoreContext);
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const featured = catalog.filter((item) => item.bestseller);
    setFeaturedItems(featured.slice(0, 5));
  }, [catalog]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title text1={"FEATURED"} text2={"PRODUCTS"} />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium products, chosen for their exceptional quality and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {featuredItems.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
