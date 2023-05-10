import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which  look even slightly believable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-[#FF3811] capitalize rounded-md font-medium">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
