import { useRef, useState } from "react";
import Header from "./Header";
import { Checkvaliddata } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login  = () =>{

    const[isSignin,setisSignin] = useState(true);
    const[errormessage,seterrormessage] = useState(null);
    const navigate = useNavigate();

    const email= useRef(null);
    const password = useRef(null);

    const handlebutton = () =>{
        const message = Checkvaliddata(email.current.value,password.current.value);
        seterrormessage(message);
        if(message) return;


    if(!isSignin){
        createUserWithEmailAndPassword(
         auth, email.current.value, 
        password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
    // ..
  });


    }
        else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });


        }
        
    }

    const tooglesignin = () =>{
        return(
        setisSignin(!isSignin)
        );
    }
        return <div>
       <Header/>
       <div className="absolute">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg 1800w"
        alt="background"/>
       </div>
       <form onSubmit={(e)=>e.preventDefault} className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-50">
       <h1 className="font-bold text-3xl ">{isSignin ? "SignIn":"Signup" }</h1>
        <input  ref={email}  type= "text" placeholder = "email address" className= "p-2 my-2 w-full bg-gray-500 rounded-lg"/>
        {!isSignin && <input type="name" placeholder="Full name" className="p-2 my-2 w-full bg-gray-500 rounded-lg"/>}
        <input   ref={password} type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-500 rounded-lg"/>
        <p className="text-red-500">{errormessage}</p>
        <button className="p-4 m-4 bg-red-700 rounded-lg " onClick={handlebutton}>{isSignin ? "SignIn" : "SignUp " }</button>
        <p className="py-4 cursor-pointer" onClick={tooglesignin}>{isSignin ? "New to Netflix?Sign up now":"Already user Sign in now!"}</p>
       </form>
    </div>
}
export default Login;