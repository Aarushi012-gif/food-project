//     import {  useEffect, useState } from "react";

//     function UserCard(){   
//         const [count , setCount]=useState(0);           //api fetch
//         const [detail, setDetail]=useState([]);        //useEffect api fetch
//         const [user , setUser]=useState([]);
//         const [loading , setLoading]=useState(true);
//         const [error , setError]=useState(""); 
//         const [search , setSearch]=useState(""); 

//         useEffect(()=>{
//             fetch("https://dummyjson.com/products")
//             .then((res)=>res.json())
//             .then ((data)=>setDetail(data));
//         },[]);



//         useEffect(()=>{
//             console.log("count rendring - " , count);
//         } ,[count]);    

//         useEffect(()=>{
//              fetch("https://jsonplaceholder.typicode.com/users")
//              .then((res)=>{
//                 if (!res.ok){
//                     throw new Error("something went wrong.....");
//                 }
//                 return res.json();  
//              })
//             .then((data) => {
//                     setUser(data);
//                     setLoading(false);
//                 })
//             .catch ((err)=>{
//                 setError(err.message);
//                 setLoading(false);
//              });
//         } , []);
//         if (loading) {
//         return <h2>Loading...</h2>;
//         }

//         if (error) {
//             return <h2>{error}</h2>;
//             };

//         const filtereduser = user.filter((user)=>
//              user.name.toLowerCase().includes(search.toLowerCase()) ||
//              user.email.toLowerCase().includes(search.toLowerCase())
        
//         );
//         {
//             search && filtereduser.length === 0 && <p>No user found</p>;
//         }

        

//     return(
//             <>
            

//             {/* //props  */}

//                 {/* <h1>hello {props.name}</h1>
//                 <h2>age {props.age} </h2> */}




//             {/* useEffect prep */}
//             <h2>{count}</h2>
//             <button onClick={()=>setCount(count+1)}>increase</button>
//             <br/>
//             <div style={{ padding: "20px" }}>
//                 <h1>user List</h1>
//                 {detail.map((detail)=>
//                 <div
//                 key={detail.id}
//                 style={{border: "1px solid black",
//                 margin: "10px",
//                 padding: "10px",
//                 }}
//                 >
//                     <h4>{detail.name.first} {detail.name.last}</h4>
//                     <p>{detail.email}</p>
//                      <p>{detail.photo}</p>
//                     <p>{detail.location}</p>
//                 </div>
//                 )}
//             </div> 

//              //loading error 

//             <div>
//                 <h3>User detail</h3>
//                 {user.map((user)=>(
//                 <div key={user.id}
//                 style={{border: "1px solid black",
//                 margin: "10px",
//                 padding: "10px",}}
//                 > 
//                     <h4>{user.name}</h4>
//                     <p>{user.email}</p>
//                 </div>  
//                 ))}
//             </div>
// {/* search and filtering practice */}

//                  <input type="text"
//                     placeholder="Search Use...."
//                     onChange={(e)=>setSearch(e.target.value)}
//                     value={search}/>
//                     <div>

//                      {
            
//                         filtereduser.length > 0?  (
//                         filtereduser.map((user) => (
//                             <p key={user.id}>{user.name}</p>
//                         ))
//                         ) : (
//                         <p>No user found</p>
//                         )}
//                         {
//                             search &&
//                         filtereduser.map((user)=>(
//                         <div key={user.id}
//                         style={{border: "1px solid black",
//                         margin: "10px",
//                         padding: "10px",}}
//                         >
//                     <h4>{user.name}</h4>
//                     <p>{user.email}</p>
//                     {
//                     filtereduser.length === 0 ? (
//                         <h3>No user found</h3>
//                     ) : (
//                         filtereduser.map((user) => (
//                         <div key={user.id}>
//                             <h3>{user.name}</h3>
//                             <p>{user.email}</p>
//                         </div>
//                         ))
//                     )
//                     }
//                     </div>))}
//                     </div>
//                     <ui>
                        
//                     </ui>
//                 </>
//         )
    
//     }
//     export default UserCard;
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useState , useEffect } from "react";
function UserCard(){
    const [foodData , setFoodData]=useState([]);
    const [loading , setLoading]=useState(true);
    const [error , setError]=useState("");
    const navigate = useNavigate()
    useEffect (()=>{
        fetch("/food.json")
        .then((response) => response.json())
        .then((data) => { setFoodData(data);
          setLoading(false);
        })
        .catch(() => {
        setError("Something went wrong");
        setLoading(false);
        });
    
    } , []);
    
    console.log(foodData)
    if (loading) {
        return <h2>Loading...</h2>;
        }
    if (error){
        return <h2>Something Went Wrong.....</h2>
    }
    return(
        <>
        <div className="menu-hero">
                <div className="hero-content">
                    <span>EXPLORE OUR MENU</span>
                    <h1>
                        Delicious Food,<br />
                        <strong>Delivered With Love </strong>
                    </h1>
                    <p>Fresh, delicious and made just for you.</p>
                </div>
                <div className="hero-image">
                        <img src="/images/headeremovebgpng.png" alt="Delicious Burger" />
                </div>
        </div>
            <div className="container">
                <div className="row">
                    {
                        foodData.map((item)=>(
                                <div className="col-md-4 mb-5" key={item.id}>
                                <div className="usercard-css"
                                    onClick={()=> navigate(`/food/${item.id}`)}>
                                    <img src={item.image} alt={item.name} className="food-img card-img-top"/>
                                <div className="user-card-css">
                                    <div className="card-info">
                                    <h3>{item.name}</h3>
                                    <p> Starting at ₹{item.price}</p>
                                </div>
                                <button className="btn">
                                   See More →
                                </button>
                                </div>
                            </div>
                                </div>
                        )
                            
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default UserCard;