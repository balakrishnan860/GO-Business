import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import "./Login.css"
const Login = ()=>{
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [errormsg,seterrormsg] = useState("")
    const navigate = useNavigate()

    const onSubmitLogin = async (e) => {
  console.log("Sign in clicked");

  e.preventDefault();
console.log({
  email,
  password,
});
  try {
    const response = await axios.post(
      "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
      {
        email,
        password,
      }
    );

    const token = response.data.data.token;

    Cookies.set("jwt_token", token);

    navigate("/");
  } catch (error) {
    seterrormsg(
      error.response?.data?.message || "Invalid email or password"
    );
  }
};
    return(
        <div className="login-container">
           <form className="login-card" onSubmit={onSubmitLogin}>
             <h1>GO BUSINESS</h1>
             <p>Sign in to your referral dashboard</p>
             <label htmlFor="email">Email</label>
             <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e)=>setemail(e.target.value)}/>
             <label htmlFor="password">Password</label>
             <input id="password" value={password} type="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>

             <button type="submit">
                Sign in
             </button>
             {errormsg && (
          <p className="error-msg">{errormsg}</p>
        )}
           </form> 
        </div>
    )
}
export default Login