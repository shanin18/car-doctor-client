import group from "/icons/group.svg"
import box from "/icons/delivery.svg"
import check from "/icons/check.svg"
import person from "/icons/person.svg"
import wrench from "/icons/Wrench.svg"
import watch from "/icons/watch.svg"

const ChooseUs = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold">Core Features</h3>
        <h2 className="text-5xl font-bold">Why Choose Us</h2>
        <p className="text-[#737373]">
        the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. 
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        <div className="text-center border rounded-lg p-8 space-y-5 hover:shadow-2xl hover:bg-[#FF3811] duration-300 hover:transform hover:-translate-y-5">
            <img src={group} className="mx-auto" alt="icon" />
            <h4 className="text-[#444444] font-bold text-lg">Expert Team</h4>
        </div>
        <div className="text-center border rounded-lg p-8 bg-[#FF3811] space-y-5 hover:shadow-2xl duration-300 hover:transform hover:-translate-y-5">
            <img src={watch} className="mx-auto" alt="icon" />
            <h4 className="text-white font-bold text-lg">Timely Delivery</h4>
        </div>
        <div className="text-center border rounded-lg p-8 space-y-5 hover:shadow-2xl hover:bg-[#FF3811] hover:text-white duration-300 hover:transform hover:-translate-y-5">
            <img src={person} className="mx-auto" alt="icon" />
            <h4 className="text-[#444444] font-bold text-lg">24/7 Support</h4>
        </div>
        <div className="text-center border rounded-lg p-8 space-y-5 hover:shadow-2xl hover:bg-[#FF3811] duration-300 hover:transform hover:-translate-y-5">
            <img src={wrench} className="mx-auto" alt="icon" />
            <h4 className="text-[#444444] font-bold text-lg">Best Equipment</h4>
        </div>
        <div className="text-center border rounded-lg p-8 space-y-5 hover:shadow-2xl hover:bg-[#FF3811] duration-300 hover:transform hover:-translate-y-5">
            <img src={check} className="mx-auto" alt="icon" />
            <h4 className="text-[#444444] font-bold text-lg">100% Guarantee</h4>
        </div>
        <div className="text-center border rounded-lg p-8 space-y-5 hover:shadow-2xl hover:bg-[#FF3811] duration-300 hover:transform hover:-translate-y-5">
            <img src={box} className="mx-auto" alt="icon" />
            <h4 className="text-[#444444] font-bold text-lg">Timely Delivery</h4>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
