import ('../login/login.css')
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { API_HOST } from "../../settings";
import burgerQueen from "../../assets/bqlogo.png";

export default 
function Login() {
const navigate = useNavigate();

const [loginInfo, setLoginInfo] = useState({
  email: "",
  password: ""
})

const [errorMessage, setErrorMessage] = useState("");

const handleChange = (event) => {
  setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  
  if (loginInfo.email === "" || loginInfo.password === "") {
    setErrorMessage("Please provide email and password");
    return;
  }

  fetch(API_HOST + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status >= 400) {
      throw new Error("Invalid email or password");
    } else {
      throw new Error("Unexpected error");
    }
  })
  .then((data) => {
    localStorage.setItem("token", data.accessToken)
    localStorage.setItem("userId", data.user.id)
    localStorage.setItem("role", data.user.role)
    localStorage.setItem("name", data.user.name)
    if (data.user.role === "admin") {
      navigate("/admin");
    } else if (data.user.role === "waiter") {
      navigate("/waiter");
    } else if (data.user.role === "chef") {
      navigate("/chef");
    }
  })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};

    return (
      <> 
        <div className="login-formulary">
        <img src={burgerQueen} alt="Burger Queen Logo" className="bq-logo"/>
          <h1 className="login-header">Burger Queen</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit} id="login-form" >
              <input
                name="email"
                className="email"
                placeholder="Email"
                type="email"
                value={loginInfo.email}
                onChange={handleChange}
              />
              <input
                name="password"
                className="password"
                placeholder="Password"
                type="password"
                value={loginInfo.password}
                onChange={handleChange}
              />
                {errorMessage && <p id= "login-error">{errorMessage}</p>}
              <button className="log-in-btn" type="submit">Log in</button>
            </form> 
          </div>
        </div>
      </>
    );
  }