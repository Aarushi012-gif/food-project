// import {  useState } from "react";      //Basic Regex validation (email, phone, password)
// import {  useState } from "react";
// function Propes(){
// const [email , setEmail]=useState("");
// const [phone , setPhone]=useState("");
// const [errors , setErrors]=useState("");
// const [phnerror, setPhnerror]=useState("");
// const [password , setPassword]= useState("");
// const [passworderror , setPassworderror]=useState("")
// const [confirmpassword , setConfirmpassword]=useState("")
// const [confirmpassworderror , setConfirmpassworderror]=useState("")   
// const [confirm , setConfirm]=useState(""); 
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^[0-9]{10}$/;
// const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     function handleSubmit(){
//         console.log("clicked");
//         setConfirm("");
//         if (email.trim() ===""){
//             setErrors("Email is req")
//             return;}
//         else if(!emailRegex.test(email)){
//             setErrors("@gmail.com");
//             return;
//             }
//         else if (phone.trim()===""){
//             setPhnerror("Phone No. is req");
//             return;
//             }
//         else if (!phoneRegex.test(phone)){
//             setPhnerror("Phone No. must be 10digit")
//             return;
//         } 
//         else if (password.trim()===""){
//             setPassworderror("Password is Req..")
//             return;
//         }
//         else if (!passwordRegex.test(password)){
//             setPassworderror("Password must contain uppercase, lowercase, number and 8 characters");
//             return;
//         }
//         else if (confirmpassword.trim()===""){
//             setConfirmpassworderror("Enter a confirm password")
//             return;
//         }
//         else if (password!==confirmpassword){
//             setConfirmpassworderror("Password does not match")
//         }
//         else{
//             setConfirm("Form Submit");

//         setErrors("");
//         setPhnerror("");
//         setPassworderror("");
//         setConfirmpassworderror("");
//         setEmail("");
//         setPhone("");
//         setPassword("");
//         setConfirmpassword("");
//         }
        
//     }
//     return(
//         <>
//             <input type="email" value={email} placeholder="Enter your email"
//             onChange={(e)=>{setEmail(e.target.value)
//             setEmail("");
//             }
//             }/>
//             {errors && <p style={{color:"red"}}>{errors}</p>}
//             <br/>
//             <input type="phn" value={phone} placeholder="enter your phone number"
//                 onChange={(e)=>setPhone(e.target.value)}
//             />
//             {phnerror && <p style={{color:"red"}}>{phnerror}</p>}
//             <br/>
//             <input type="text" value={password}onChange={(e)=>setPassword(e.target.value)}
//             placeholder="Enter a Password"
//             />
//             {passworderror && <p style={{color:"red"}}> {passworderror} </p>}
//             <br/>
//             <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}
//                 placeholder="Enter a Confirm Password"
//             />
//             <br/>
//             {confirmpassworderror && <p style={{color:"red"}}>{confirmpassworderror}</p>}
//             <button onClick={handleSubmit}> 
//             submit
//             </button>
//             {confirm && <p style={{color:"green"}}>{confirm}</p>}
            
//         </>
//     )
// }
// export default Propes;


// form validation

//     function Propes(){
//     const [email , setEmail]=useState("");
//     const [emailerror , setEmailError]=useState("");
//     const [phone , setPhone]=useState("");
//     const [phoneerror , setPhoneError]=useState("");
//     const [password , setPassword]= useState("");
//     const [passworderror , setPassworderror]=useState("");
//         function handleEmailChange(e) {
            
//                 setEmail(e.target.value);
//                 setEmailError("");
//             }
//         function validateEmail() {

//         if (!email.trim().includes("@")) {
//         setEmailError("Enter a valid email");
//         return false;
//     }     
//         return true;
//     }
//         function handlephone(e) {
//             setPhone(e.target.value);
//             setPhoneError("");
//         }   
//         function validatePhone(){
//             if(!/^\d{10}$/.test(phone)){
//             setPhoneError("Phone must be 10 digit.");
//             return false;
//             }
//             return true;
//         }
//         function handlepassword(e){
//             setPassword(e.target.value);
//             setPassworderror("");
//         }
//         function validpassword(){
//             if (password.length < 8) {
//                 setPassworderror("Password must be at least 8 characters.");
//                 return false;
//             }

//             return true;
        
//         }
        
//         function handleSubmit(){
//         const isEmailValid = validateEmail();
//         const isPhoneValid = validatePhone();
//         const isPasswordValid = validpassword();

//         if (
//             isEmailValid && isPhoneValid && isPasswordValid)
            
//             {
//                 console.log ("Form Submit");

//                 setEmail("");
//                 setPhone("");
//                 setPassword("");

//                 setEmailError("");
//                 setPhoneError("");
//                 setPassworderror("");
//             }   
            
//         }
//         return(
//             <>
//                 <input
//                     type="email" placeholder="Enter Your Email"
//                     value={email}
//                     onChange={handleEmailChange}

//                     onBlur={validateEmail}
//                 />
//                 <p>{emailerror}</p>
//                 <input type="tel" 
//                     onChange={handlephone}
//                     onBlur={validatePhone}
//                     placeholder="Enter Phone No."
//                     value={phone}
//                 />
//                 <p>{phoneerror}</p>
//                 <input type="password" onChange={handlepassword}
//                     value={password}
//                     onBlur={validpassword}
//                     placeholder="Enter a password"
//                 />
//                 <p>{passworderror}</p>
//                 <button onClick={handleSubmit}>submit</button>
//             </>
        
//         )
//     }
//     export default Propes;

import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
        <footer className="footer">
        <div className="main-footer">
             <h3>Foodie Zone</h3>
             <p>Delicious food delivered to your doorstep.
                Enjoy your favorite meals with Foodie Zone
             </p>    
        </div>
        <div className="footer-links">
            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/usercard">Menu</Link>
            <Link to="/form">Cart</Link>
        </div>
        <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Phone No. :- +91 9876543210</p>
            <p>Email Id :- foodiezone@gmail.com</p>
            <p>Location :- New Delhi, India</p>
        </div>
        <div className="footer-bottom">
            <p>© 2026 Foodie Zone. All Rights Reserved.</p>
        </div>
        </footer>
        </>
    )
}
export default Footer;