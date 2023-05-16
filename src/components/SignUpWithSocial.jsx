import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import google from "/icons/Google.png";
import { useNavigate } from "react-router-dom";

const SignUpWithSocial = () => {
    const {signInWithGoggle} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignInWithGoogle = () =>{
        signInWithGoggle()
        .then(()=>{
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="space-x-4 text-center my-8">
            <button onClick={handleSignInWithGoogle} ><img src={google} className="w-[50px]" alt="social icon" /></button>
          </div>
    );
};

export default SignUpWithSocial;