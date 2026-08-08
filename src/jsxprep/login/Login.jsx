import { useState } from "react";
function Login({ setIsLoggedIn, setShowLogin , setUserName}){
    const[email , setEmail]=useState("");
    const[password , setPassword]=useState("");
    const[error , setError]=useState("");
    const[success , setSuccess]=useState("");
    // const[login, setLogin]=useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
        setError("Please fill all fields");
        return;
    }
        if (!email.includes("@")) {
        setError("Please enter a valid email");
        return;
    }
        if (password.length < 8){
        setError("Password must be at least 8 characters");
        return;
    }
        setError("");
        setSuccess("Login Successful");
        setTimeout(() => {
            setIsLoggedIn(true);
            setUserName(email);
            setShowLogin(false);
        }, 500);
        console.log(email);
        console.log(password);
    };

    return(
        <>
        <div className="login-overlay">
        <div className="login-card">
         <button
                type="button"
                className="close-login"
                onClick={() => setShowLogin(false)}
            >
                ×
            </button>

            {success ? (
                <p>{success}</p>
            ) : (
        <>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>

             <h2>Log In</h2>
            <input 
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">
                Login
            </button>
        </form>
        </>
        )}
        
        </div>
        </div>
        
        </>
    )
};
export default Login;