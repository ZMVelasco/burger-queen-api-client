export default function Root() {
  return (
    <>
      <div id="container-login">
        <h1>Burger Queen</h1>
        <form id="login-form" role="search">
          <input id="Email" placeholder="Email" type="text" name="Email" />
          <input
            id="password"
            placeholder="Email"
            type="password"
            name="password"
          />
          <button id="logIn" type="button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
