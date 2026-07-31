import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
function FoodData({cart , setCart , login}) {
    const {id} =useParams();
    const [food , setFood]=useState(null);
    

    useEffect(()=>{

        fetch("/food.json")
        .then((response) => response.json())
        .then((data) => {
            const selectedFood = data.find((item) => item.id === Number(id));
            setFood(selectedFood);
        })

    }, [id]);
    useEffect(() => {
    console.log(cart);
}, [cart]);

        function addToCart(item) {
            if (!login) {
                alert("Please Login First");
                return; 
            }
            const existingItem = cart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                const updatedCart = cart.map((cartItem) => {
                        if (cartItem.id === item.id) {
                            return { ...cartItem, count: cartItem.count + 1 };
                        }
                        return cartItem;
                    });

                    setCart(updatedCart);
                }

            else {
                    setCart([...cart,{...item , count : 1 }]);      // item pehli baar cart mein add ho raha hai
            }
        }
    
    return (
    <>
        <div>
        <h1 style={{textAlign:'center' ,marginBottom:'25px'}}>{food?.name}</h1>
        <div className="food-items-container">
        {food?.item?. map((item)=>(
            
           <div className="card-css">
            <div  key= {item.id} className="card food-card mb-5" >
                <img src={item.image} alt={item.name} className="food-img card-img-top card-imagees"/>
                <h4>{item.name} </h4>
                <p>₹{item.price}</p> 
                 <button className="btn" onClick={()=>addToCart(item)}>

                 Add to Cart 
                </button>
            </div>
           </div>
        ))}
        </div>
        </div>
    </>
    );
}

export default FoodData;
