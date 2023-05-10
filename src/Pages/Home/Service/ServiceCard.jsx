import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, title, img, price, } = service;
  return (
    <div className="border rounded-lg p-6">
      <div>
        <div>
          <img src={img} className="w-full rounded-md" alt="image" />
        </div>
        <div>
          <h2 className="mt-5 text-[#444444] font-bold text-2xl" >{title}</h2>
          <div className="flex items-center justify-between mt-5">
            <p className="text-[#FF3811] font-semibold text-xl">Price : ${price}</p>
            <Link to={`/services/${_id}`}>
              <BsArrowRight className="text-[#FF3811] text-xl"></BsArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
