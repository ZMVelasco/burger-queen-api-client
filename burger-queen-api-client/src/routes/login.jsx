import ('../stylesheets/login.css')

export default 
function Login() {
    return (
      <> 
        <div id="login-form">
        <img src="../src/assets/bqlogo.png" alt="Burger Queen Logo" className="bq-logo"/>
          <h1>Burger Queen</h1>
          <div>
            <form id="login-form" >
              <input
                className="email"
                placeholder="Email"
                type="email"
              />
              <input
                className="password"
                placeholder="Password"
                type="password"
              />
              <button type="submit">Log in</button>
            </form> 
          </div>
        </div>
      </>
    );
  }