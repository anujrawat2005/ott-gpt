import Header from "./Header";

const Login  = () =>{
    return <div>
       <Header/>
       <div className="absolute">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg 1800w"
        alt="background"/>
       </div>
       <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-50">
       <h1 className="font-bold text -xl">SIGN IN</h1>
        <input type= "text" placeholder = "email address" className= "p-2 my-2 w-full bg-gray-500 rounded-lg"/>
        <input type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-500 rounded-lg"/>
        <button className="p-4 m-4 bg-red-700 rounded-lg">signIn</button>
       </form>
    </div>
}
export default Login;