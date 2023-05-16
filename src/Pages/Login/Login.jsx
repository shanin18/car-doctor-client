import image from "/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUpWithSocial from "../../components/SignUpWithSocial";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-16">
        <div className="">
          <img src={image} className="w-[360px]" alt="image" />
        </div>
        <div className="w-full md:w-[500px] shadow-2xl bg-base-100 p-12 rounded-xl mx-2 border">
          <h2 className="text-[#444444] font-semibold text-4xl text-center mb-12">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
              <input
                className="btn border-0 bg-[#FF3811] capitalize"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="divider">OR</div>
          <SignUpWithSocial></SignUpWithSocial>
          <p className="text-[#737373] font-medium text-center">
            Have no account?{" "}
            <Link to="/signUp">
              <span className="text-[#FF3811] hover:underline">SignUp</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
