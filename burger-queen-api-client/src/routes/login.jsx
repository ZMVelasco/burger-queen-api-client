export default 
function Login() {
    return (
      <>
        <img src="../src/assets/bqlogo.png" alt="Burger Queen Logo" className="bq-logo"/>
        <div id="login-form">
          <h1>Burger Queen</h1>
          <div>
            <form id="login-form">
              <input
                id="email"
                placeholder="email"
                type="email"
              />
              <input
                id="password"
                placeholder="password"
                type="password"
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </>
    );
  }