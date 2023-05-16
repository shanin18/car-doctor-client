import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if(currentUser && currentUser.email){
        const loggedUser = {
          email:currentUser.email
        }
  
        fetch("http://localhost:5000/jwt",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log("jwt response", data)
          // warning:local storage is not the best its the second best place to store access token
          localStorage.setItem("car-access-token", data.token)
        })
      }
      else{
        localStorage.removeItem("car-access-token")
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoggle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    signInWithGoggle,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
