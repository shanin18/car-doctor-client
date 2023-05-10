import image from "/images/login/login.svg";
import facebook from "/icons/Facebook.png";
import linkedIn from "/icons/linkedin.png";
import google from "/icons/Google.png";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-16">
        <div className="">
          <img src={image} className="w-[360px]" alt="image" />
        </div>
        <div className="w-full md:w-[500px] shadow-2xl bg-base-100 p-12 rounded-xl mx-2 border">
          <h2 className="text-[#444444] font-semibold text-4xl text-center">
            Login
          </h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0 bg-[#FF3811] capitalize">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="space-x-4 text-center my-8">
            <button><img src={facebook} className="w-[50px]" alt="social icon" /></button>
            <button><img src={linkedIn} className="w-[50px]" alt="social icon" /></button>
            <button><img src={google} className="w-[50px]" alt="social icon" /></button>
          </div>
          <p className="text-[#737373] font-medium text-center">Have no account? <span className="text-[#FF3811]">Register</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
