// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import Propes from "../propes/Propes";
// // function Usestate() {
// //     const [show , setShow]= useState(false);
// //     return(
// //         <>
// //             <button onClick={()=>setShow(!show)}>Show / HIDE</button>
// //             {show && <h1>Hello React</h1>}
// //            <Propes name="Aarushi" age={25}/>
// //            <Propes name="Riya" age={21}/>
// //            <Propes name="Neha" age={23}/>
// //         </>
// //     )
// // }
// // export default Usestate;  //prpos practice done

//                  // start useState

//     function Usestate(){
//         const [count, setCount]=useState(10);
//         const [show , setHide]=useState(false);
//         const [login, setLogout]=useState(true);
//         const [name , setName]=useState(" ");
//         const [email , setEmail]=useState("");
//         const [entername , setEntername]= useState("")
//         const handleSubmit=()=>
//         {
//             console.log(email);
//             console.log(entername);
//         };
//         const [click , setClick]=useState("")

//         return(
//             <>
//                 <h1>Count {count}</h1>
//                 <button onClick={()=>setCount(count+1)}>increase</button>
//                 <button onClick={()=>setCount(count-1)}>Decrease</button>
//                 <button onClick={()=>setCount(10)}>Reset</button>
//                 <br/>
//                 <input 
//                 type ={show ? "text" : "password"}              //ternary conditions use   //conditions ? value1 : value2
//                 placeholder="Create a Password"
//                 />
//                 <br/>
//                 <br/>
//                 <button onClick={()=>setHide(!show)}>
//                 {show ? "Hide Password" : "Show Password" }     
//                 </button>  

//                 <h1>{login ? "Welcome User" : "Please Login"}</h1>

//                 <button onClick={()=> setLogout(!login)}>                                
//                 {login ? "Logout" : "Login"}
//                 </button>  <br/>
//                 <input
//                     type="text"
//                     value={name}
//                     placeholder="Enter Your Name"
//                     onChange={(e) => setName(e.target.value)}          //form handling

//                 />   
//                 <br/>  
                
//                 {name ? `hello  ${name}` : "Please Enter Your Name"}
//                 <div>
//                     <input 
//                         type="text"
//                         value={entername}
//                         placeholder="Enter Your Name"
//                         onChange={(e)=>setEntername(e.target.value)}
//                     />
//                     <br/>
//                     <input 
//                         type="text"
//                         value={email}
//                         placeholder="Enter Your Email"
//                         onChange={(e)=>setEmail(e.target.value)}
//                     />
//                     <br/>
//                     <button onClick={handleSubmit}>Submit 
//                     </button>
//                     <br/>
                    

//                 </div>
//                 <input
//                     type="text"
//                     value={click}
//                     placeholder="Enter a Text"
//                     onChange={(e)=>setClick(e.target.value)}
//                 />
//                 <h1>Hello  {click} </h1>
//                 <Link to="/form">form page</Link>




               
//             </>
//         )
//     }
//     export default Usestate;
import { useState } from "react"
function Contact(){
    const[name , setName]=useState("");
    const [email , setEmail]= useState("");
    const [message , setMessage]=useState("");
    const [success ,setSuccess]=useState("");
    const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
        setSuccess("Please fill all fields!");
    }
    else{
        setSuccess(`Thank you ${name}! Your message has been sent.`);
    }
};
    return(
        <>
        <div className="contact-container">
        <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We would love to hear from you!</p>
            <p> Phone: +91 9876543210</p>
            <p> Email: foodiezone@gmail.com</p>
            <p> Address: New Delhi, India</p>
        </div>
       
        <div>
        {success && <p className="success-message">{success}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <textarea 
                placeholder="Enter your message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Send Message</button>
        </form>
        
        </div>
        </div>
        </>
    )
}
export default Contact