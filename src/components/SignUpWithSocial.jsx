import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import facebook from "/icons/Facebook.png";
import linkedIn from "/icons/linkedin.png";
import google from "/icons/Google.png";

const SignUpWithSocial = () => {
    const {signInWithGoggle} = useContext(AuthContext);

    const handleSignInWithGoogle = () =>{
        signInWithGoggle()
        .then(()=>{})
        .catch(err => console.log(err))
    }

    return (
        <div className="space-x-4 text-center my-8">
            <button><img src={facebook} className="w-[50px]" alt="social icon" /></button>
            <button><img src={linkedIn} className="w-[50px]" alt="social icon" /></button>
            <button onClick={handleSignInWithGoogle} ><img src={google} className="w-[50px]" alt="social icon" /></button>
          </div>
    );
};

export default SignUpWithSocial;