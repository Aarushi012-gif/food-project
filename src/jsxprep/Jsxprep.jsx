// import { useEffect, useState } from "react";
// function Jsxprep() {
//   function call(){
//       alert("hello world");
//     }
//     const name="aaru";
//     const city="delhi";
//     const [count,setCount]=useState(0);
//     const [nmae , setNmae]=useState();
//     const [input , setInput]=useState();

//   return (
//     <div>
//       <h1>My name is {name}</h1>
//       <h2>live in {city}</h2>
//       <h3>count {count}</h3>
//       <button onClick={()=>setCount(count+1)}>increase me</button>
//       <button onClick={()=>setCount(count-1)}>decrease me</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//       <button onClick={()=>setCount(count*2)}>Double</button>
//       <input type="text" placeholder="Enter your name" onChange={(e)=> setInput(e.target.value)}/> 
//       <span> 
//       <button onClick={call}>Show name</button>
//       </span>

    
//       <br/>
//     <div>
//         <input type="text" placeholder="Enter your city" 
//       onChange={(e)=>setInput(e.target.value)}

//         onKeyDown = {(e)=>{
//             if (e.key === "Enter")
//             setNmae(input)
            
//         }}
        
//            />

//       <h1>{nmae}</h1>
//       <button onClick={call}>click me</button>
//     </div>
//     </div>
    
//   )
// }

// export default Jsxprep;


// function Jsxprep() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         Show/Hide
//       </button>

//       {show && <h1>Aarushi</h1>}
//     </>
//   );
// }




// import "../App.css";


// {
//   // const [show, setShow]=useState(false);
//   // const [visible , setInvisible]=useState(false);
//   const[increment , setIncrement]=useState(0)

  
    
//       <div className={show ? "dark":"light"}>
//         <button onClick={()=>setShow(!show)} > change color blue

//       </button>
//       </div>

//       <button onClick={()=>setInvisible(!visible)}>
//       see/hide
//       </button>
//       {visible && <h1>Hello React</h1>}
//       <button onClick={()=>setIncrement(increment+1)}>
//         count
//       </button>
//       <h1> Count = {increment}</h1>
//       <button onClick={()=>setIncrement(increment-1)}>
//         decrease
//       </button> 
//       <button onClick={()=>
//       {
//         if(increment > 0)
//       {
//         setIncrement(increment-1);
//       }
//       else {
//         alert("can't go below");
//       }
//       }
//       }>
//       decrement
        
      
//       </button>


      
      
    
  
// }
// export default Jsxprep;
import { Link } from "react-router-dom";

function Jsxprep(){
        return(
        <>
            <section className="home-section">
                <h3>Popular Categories</h3>
                <p>Choose your favorite food </p>

                <div className="home-image">
                    <Link to="/usercard" className="home-card">
                        <img src="/images/pizza.png" alt="Pizza"/>
                        <h4>Pizza</h4>
                        <p>Delicious Cheesy Pizza</p>
                    </Link>
                    <Link to="/usercard" className="home-card">
                        <img src="/images/burger.png" alt="Burger"/>
                        <h4>Burger</h4>
                        <p>Juicy and tasty burgers</p>
                    </Link>
                    <Link  to="/usercard" className="home-card">
                        <img src="/images/momos.png" alt="Momos"/>
                        <h4>Momos</h4>
                        <p>Hot and yummy momos</p>
                    </Link>
                    <Link to="/usercard" className="home-card">
                        <img src="/images/cakes.png" alt="Cakes"/>
                        <h4>Cakes</h4>
                        <p>Sweet and delicious cakes</p>
                    </Link>
                </div>
            </section>
            <section className="why-section">
                <h3>Why Choose Foodie Zone?</h3>
                <p>We make your food experience delicious and easy</p>
                <div className="why-container">
                    <div className="why-card">
                        <h4>Fast Delivery</h4>
                        <p>Get your favorite food delivered quickly at your doorstep.</p>
                    </div>
                    <div className="why-card">
                        <h4>Fresh & Tasty</h4>
                        <p>Enjoy fresh, delicious and quality food every time.</p>
                    </div>
                    <div className="why-card">
                        <h4>Easy Ordering</h4>
                        <p>Order your favorite food with a simple and easy process.</p>
                    </div>
                    <div className="why-card">
                        <h4>Best Quality</h4>
                        <p>We care about quality and your satisfaction.</p>
                    </div>
                </div>
            </section>
                    
        </>
    )
}   
export default Jsxprep;