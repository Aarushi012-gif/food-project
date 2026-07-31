// import "../../App.css";
// import { useState } from "react";
// function Form(){
// const [name, setName]=useState("");
// const [email, setEmail]=useState("");
// const [phn , setPhn]=useState("")
// const [pass , setPass]=useState("");
// const [confirm , setConfirm]= useState("");
// const [show , setHide]=useState(false);
// const [nameerror, setNameerror]=useState("");
// const [emailerror, setEmailerror]=useState("");
// const [phnerror , setPhnerror]=useState("")
// const [passerror , setPasserror]=useState("");
// const [confirmerror , setConfirmerror]= useState("");
// const [success , setSuccess]=useState("")

// const handleSubmit=(e) => 
// {
//     e.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(phn);
//     console.log(pass);
//     console.log(confirm);
//     if (name==""){
//         setNameerror("Name Required");
//         return;}
//     if (email==""){
//         setEmailerror("Email Required");
//         return;}
//     else if (!email.includes("@")){
//         setEmailerror("invalid email");
//         return;
//     }
//     if (phn.length !== 10){
//         setPhnerror("Enter phone number must be a 10 digit");
//         return;}
//     if (pass.length<8){
//         setPasserror("Enter a password must be 8 char");
//         return;
//     }
//     if (confirm==""){
//         setConfirmerror(" Enter a Confirmation Password");
//         return;}
//     if (pass!==confirm){
//        setConfirmerror("Password Does Not Match");
//         return;}
//     if (success==""){
//         setSuccess("Account Created");
//         return;
//     }
// }
//     return(
//         <>
//             <div className="container">
//               <form onSubmit={handleSubmit} autoComplete="off">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="tex">
//                             Please Login This Website
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12 ">
//                         <div className="input-box">
//                             <input type="text" placeholder="Enter Your Name" 
//                             value={name}
//                             style={{width:"80%" }}
//                                 onChange={(e)=>{setName(e.target.value);
//                                 setNameerror("");
//                                 }}
//                                 onBlur={() => console.log("Input left")}
//                             />
//                             {nameerror && <p style={{color:"red"}}>{nameerror}</p>}
//                         </div>
//                     </div>
//                 </div>
//                  <div className="row">
//                     <div className="col-md-12 ">
//                         <div className="input-box">
//                             <input type="email" placeholder="Enter Your Email"
//                             autoComplete="off"
//                             value={email}
//                             style={{width:"80%" }}
//                             onChange={(e)=> {setEmail(e.target.value);
//                             setEmailerror("");
//                             }}
//                              />
//                             {emailerror && <p style={{color:"red"}}>{emailerror}</p>}
//                         </div>
//                     </div>
//                 </div>
//                  <div className="row">
//                     <div className="col-md-12">
//                         <div className="input-box">
//                             <input type="tel" placeholder="Enter Your Phone No." style={{width:"80%" }}
//                             value={phn}
//                             onChange={(e)=>{setPhn(e.target.value);
//                             setPhnerror("");
//                             }}
//                             />
//                             {phnerror && <p style={{color:"red"}}>{phnerror}</p>}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="input-box">
//                             <input type={show ? "text" : "password"}
//                               placeholder="Password"  style={{width:"80%" }}
//                               value={pass}
//                               onChange={(e)=>{setPass(e.target.value);
//                               setPasserror("");
//                               }}
//                               />
//                               {passerror && <p style={{color:"red"}}>{passerror}</p>}
//                             <br/>
//                             <input
//                                 type="checkbox"
//                                 onChange={() => setHide(!show)}/>       
//                                 Show Password        
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="input-box">
//                             <input type="password" placeholder="Confirm Password" style={{width:"80%" }}
//                             value={confirm}
//                             onChange={(e)=>{setConfirm(e.target.value);
//                             setConfirmerror("");
//                             }}
//                             />
//                             {confirmerror && <p style={{color:"red"}}>{confirmerror}</p>}
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{textAlign:"center" , marginBottom:"10px" , border:"0px solid"}}>
//                     <button  type="submit" className="btn btn-primary"
//                     disabled={
//                                 !name ||
//                                 !email ||
//                                 !phn ||
//                                 !pass ||
//                                 !confirm
//                             }
//                     >Create Account</button>
//                     {success && <p style={{color:"green"}}>{success}</p>}
//                 </div>
//               </form>
//             </div>
//         </>
//     )
// }
// export default Form;
import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
function Form({cart , setCart}){
    // const [empty , setEmpty]=useState(false)
    const[show , setShow]=useState(false);
    const subtotal = cart.reduce(
    (total, item) => total + item.price * item.count,
    0);
    const Discount = subtotal*0.10;
    const afterdiscount = subtotal-Discount;
    const gst = afterdiscount*0.05;
    const delivary = 40;
    const finaltotal = afterdiscount+gst+delivary;
    const [orderPlace ,setOrderPlace]=useState(false)

 

    function increaseCount(id){
        const updatedCart = cart.map((item)=>{
            if (item.id === id){
                return{...item, count: item.count +1};
            }
            return item;
        });
        setCart(updatedCart);
    }
    function decreaseCount(id){
        const updatedCart=cart.map((item)=>{
            if (item.id === id){
                return{...item , count: item.count-1};
            }
            return item;
        })
         .filter((item) => item.count > 0);
        setCart(updatedCart);
    }

    return(
        <>
       
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h3>🛒 My Cart</h3>
                <p>Your delicious picks are waiting for you! 😋</p>
        <div className="cart-container">
        {cart.length > 0 ? (
        <>
        {cart.map((item) => (
            <div key={item.id} className="cart-item">
           <img 
            src={item.image} 
            alt={item.name} 
            className="cart-image"
        />
                <div className="cart-details">
                <p>{item.name}</p>
                <p>Price :- ₹{item.price*item.count}</p>
                 <div  className="quantity">
                <button onClick={()=>decreaseCount(item.id)} style={{width:'30%'}} className="cart-btn">-</button>
                <span>{item.count}</span>
                <button onClick={()=>increaseCount(item.id)} style={{width:'30%'}} className="cart-btn">+</button>
                 </div>
                </div>
            </div>
        ))}
        <button 
            className="checkout-btn1"
            onClick={() => setShow(true)}>Checkout
        </button>
        </>
        ):(
        <div className="empty-msg">
            <h3>Your Cart is Empty 🛒</h3>
            <p>Please add some delicious items first 😋
            <span><Link to="/usercard" className="menu-btn"> Go To Menu</Link></span>
            </p>
            
        </div>
        )}
        </div>
        </div>


                {show &&
                    <div className="col-md-6">
                <h2>Order Summary</h2> 
                    <div className="summary">
                        <p>Subtotal : ₹{subtotal.toFixed(2)}</p>
                        <p>Discount (10%): -₹{Discount.toFixed(2)}</p>
                        <p>GST/Tax  (5%):  ₹{gst.toFixed(2)}</p>
                        <p>Delivery Charges : ₹{delivary}</p>

                        <hr />

                        <h4>Total : ₹{finaltotal.toFixed(2)}</h4>
                        <button className="checkout-btn" onClick={()=>{
                            setOrderPlace(true);
                            setCart([]);
                            setShow(false)
                        }}>
                            Place Order
                        </button>
                        
                    </div>

                </div>
                }
                {orderPlace && (
                    <div style={{textAlign:'center'}}>
                        <h2>Order Placed Successfully!</h2>
                        <p>Thank you for ordering with Foodie Zone </p>
                        <p>Your order will be delivered soon 🚚</p>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}
export default Form;