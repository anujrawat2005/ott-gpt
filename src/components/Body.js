import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adddUser, removeUser } from "../utils/userSlice";


const Body = () =>{
    const dispatch = useDispatch();
  


    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ]);



    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid,email,displayName} = user;
              dispatch(adddUser({uid:uid,email:email,displayName:displayName}));
            
              
            } else {
                dispatch(removeUser());
                
              
            }
          });

    },[])








    return(
        <div>
          <RouterProvider router={approuter}/>
        </div>
    );
}
export default Body;