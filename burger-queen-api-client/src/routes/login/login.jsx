import ('../login/login.css')
import { useState } from "react";
// import { redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"

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

  fetch("https://ddf3-2806-10ae-10-423f-fcce-54e3-bf06-2281.ngrok-free.app/login", {
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
    if (data.user.role === "admin") {
      navigate("/admin");
    } else if (data.user.role === "waiter") {
      navigate("/waiter");
    }
  })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};
}
