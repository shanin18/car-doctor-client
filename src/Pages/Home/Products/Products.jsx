import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://car-doctor-server-shanin18.vercel.app/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="space-y-12">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>

      <div className="text-center">
        <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-[#FF3811] capitalize rounded-md font-medium">
          More Products
        </button>
      </div>
    </div>
    );
};

export default Products;