import Login from "../login/Login";
import { Link , useNavigate} from "react-router-dom";
import logo from "../../assets/finalLogo.png";  
import "../../App.css";
import {  useState , useRef , useEffect} from "react";

    

    function Header({isLoggedIn,
    setIsLoggedIn,
    showLogin,
    setShowLogin
 ,  userName,
    setUserName
    ,cart}){

        const navigate = useNavigate();
        const[search , setSearch]=useState("");
        const[show , setShow]=useState(false);
        const[foodData , setFoodData]=useState([]);
        // const[login , setShowLogIn]=useState(false);
        useEffect(() => {
        fetch("/food.json")  
            .then((response) => response.json())
            .then((data) => setFoodData(data));
        }, []);
        const searchRef = useRef(null);
        const filterfood=foodData.filter((u)=>
        u.name.toLowerCase().includes(search.toLowerCase())

    )
    useEffect (()=>{
        const handleClick = (e) =>{
            if(!searchRef.current.contains(e.target))
                setShow(false);

        };
        document.addEventListener("click", handleClick)
        return()=>{
            document.removeEventListener("click",handleClick);
        };
    
    } , []);

        return(
            <>
                <div className="header-main">
                
                        <div className="logo-section">
                            <div className="logo">
                                <img
                                    src={logo}
                                    alt="logo"
                                />
                                <div>
                                    <p className="welcome">
                                        {isLoggedIn ? `Welcome, ${userName}` : "Welcome"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="nav-section" >
                            <ul  className="header-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/usercard">Menu</Link></li>
                                <li> <Link to="/form">
                                My Cart {cart.length > 0 && `(${cart.length})`}
                                </Link></li>
                            </ul>
                        </div>
                        <div className="right-section">
                             <div className="search-box"  ref={searchRef}>
                                <input type="text"
                                    placeholder="🔍 Search Food..."
                                    value={search}
                                    onChange={(e)=>{
                                        const value = e.target.value;
                                        setSearch(value);
                                        value ? setShow(true): setShow(false);
                                    }}
                                    className="search-input"/>
                                    {
                                        show && search ?
                                        (
                                            filterfood.length>0?

                                        <div className="search-result">
                                            {filterfood.map((item)=>
                                              <div
                                                    className="search-card"
                                                    key={item.id}
                                                    onClick={() => {
                                                        setSearch(item.name);
                                                        setShow(false);
                                                        navigate(`/food/${item.id}`);
                                                    }}
                                                                                                    >
                                                    {item.name}
                                                </div>
                                                )}
                                        </div>
                                                :
                                            
                                                <p>No Food Search..</p>
                                        ):null 
                                    }
                             </div>
                                <button 
                                className="login-btn"
                                    onClick={() => {
                                        if (isLoggedIn) {
                                        setIsLoggedIn(false);
                                        setUserName("");
                                        } else {
                                        setShowLogin(true);
                                        }
                                    }}>
                                {isLoggedIn ? "Logout" : "Login"}
        
                                </button>
                                {showLogin && (
                                <Login
                                    setIsLoggedIn={setIsLoggedIn}
                                    setShowLogin={setShowLogin}
                                    setUserName={setUserName}
                                    
                                />
                            )}
                        </div>
                    </div>
                    <div style={{marginTop:"50px"}}>
                </div>
                
            </>

        )
    }
    export default Header;