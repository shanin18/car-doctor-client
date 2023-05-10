const ProductCard = ({ product }) => {
  console.log(product);
  const { title, img, price } = product;
  return (
    <div className="border rounded-lg p-6">
      <div>
        <div className="bg-[#F3F3F3] p-8 rounded-md">
          <img
            src={img}
            className="w-[134px] mx-auto"
            alt="image"
          />
        </div>
        <div className="text-center space-y-3">
          <h2 className="mt-5 text-[#444444] font-bold text-2xl">{title}</h2>
          <p className="text-[#FF3811] font-semibold text-xl">${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
