import { useState } from "react";
import Jsxprep from "./jsxprep/Jsxprep";
import { Routes, Route } from "react-router-dom";
import Header from "./jsxprep/header/Header";
import UserCard from "./jsxprep/usercard/UserCard";
import Headerbanner from "./jsxprep/headerbanner/Headerbanner"
import FoodData from "./jsxprep/foodData/FoodData";
import Form from "./jsxprep/form/Form";
import Footer from "./jsxprep/footer/Footer"; 
import Contact from "./jsxprep/contact/Contact";



function App() {
  const [cart , setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName , setUserName]=useState("");
  
 
  return (
    <>
    <Header  isLoggedIn={isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}
    showLogin={showLogin}
    setShowLogin={setShowLogin}
    userName={userName}
    setUserName={setUserName}
    cart={cart}
    />
    <Routes>
     <Route path="/" element={
        <>
    <Headerbanner />
    <Jsxprep />
        </>
    } />
      <Route path="/" element={<Jsxprep/>} />
      <Route path="/usercard" element={<UserCard/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/form" element={<Form cart={cart} setCart={setCart}/>}/>
      <Route path="/food/:id" 
      element={<FoodData cart={cart} 
      setCart={setCart} 
      login={isLoggedIn}/>}/>
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;