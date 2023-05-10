import icon1 from "/icons/time.png";
import icon2 from "/icons/telephone.png";
import icon3 from "/icons/location.png";

const Contact = () => {
  return (
    <div className="bg-[#151515] px-20 py-24 rounded-xl flex items-center justify-around">
      <div className="flex items-center gap-5">
        <div>
          <img src={icon1} alt="icon" />
        </div>
        <div className="text-white">
          <small>We are open monday-friday</small>
          <h4 className="font-bold text-2xl">7:00 am - 9:00 pm</h4>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <img src={icon2} alt="icon" />
        </div>
        <div className="text-white">
          <small>Have a question?</small>
          <h4 className="font-bold text-2xl">+2546 251 2658</h4>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <img src={icon3} alt="icon" />
        </div>
        <div className="text-white">
          <small>Need a repair? our address</small>
          <h4 className="font-bold text-2xl">Liza Street, New York</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
