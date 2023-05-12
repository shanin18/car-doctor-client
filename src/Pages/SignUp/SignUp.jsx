import image from "/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SignUpWithSocial from "../../components/SignUpWithSocial";

const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser} = useContext(AuthContext);

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email =form.email.value;
    const password =form.password.value;
    const confirmPassword =form.confirm_password.value;

    if(password !== confirmPassword){
      setError("password not matched!");
      return
    }

    createUser(email, password)
    .then((result)=>{
      console.log(result)
      form.reset();
    })
    .catch(err => console.log(err))

  }



  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-16">
        <div className="">
          <img src={image} className="w-[360px]" alt="image" />
        </div>
        <div className="w-full md:w-[500px] shadow-2xl bg-base-100 p-12 rounded-xl mx-2 border">
          <h2 className="text-[#444444] font-semibold text-4xl text-center mb-12">
            Sign Up
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                name="confirm_password"
                placeholder="confirm password"
                className="input input-bordered"
              />
              <small className="text-red-600 my-2">{error}</small>
            </div>
            <div className="form-control mt-6">
              <input className="btn border-0 bg-[#FF3811] capitalize" type="submit" value="SignUp" />
            </div>
          </form>
          <div className="divider">OR</div>
          <SignUpWithSocial></SignUpWithSocial>
          <p className="text-[#737373] font-medium text-center">Already have an account? <Link to="/login"><span className="text-[#FF3811] hover:underline">Login</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

