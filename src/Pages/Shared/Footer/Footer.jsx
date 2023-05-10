import logo from "/logo2.pngg";

const Footer = () => {
  return (
    <footer className="bg-[#151515] mt-24">
      <div className="footer p-10 container mx-auto text-white">
        <div>
          <img src={logo} alt="logo" />
          <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className="text-xl font-semibold mb-10 text-white">About</span>
          <a className="link link-hover mb-6">Branding</a>
          <a className="link link-hover mb-6">Design</a>
          <a className="link link-hover mb-6">Marketing</a>
          <a className="link link-hover mb-6">Advertisement</a>
        </div>
        <div>
          <span className="text-xl font-semibold mb-10 text-white">Company</span>
          <a className="link link-hover mb-6">About us</a>
          <a className="link link-hover mb-6">Contact</a>
          <a className="link link-hover mb-6">Jobs</a>
          <a className="link link-hover mb-6">Press kit</a>
        </div>
        <div>
          <span className="text-xl font-semibold mb-10 text-white">Support</span>
          <a className="link link-hover mb-6">Terms of use</a>
          <a className="link link-hover mb-6">Privacy policy</a>
          <a className="link link-hover mb-6">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
