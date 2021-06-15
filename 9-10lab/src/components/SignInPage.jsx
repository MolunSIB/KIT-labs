import React from "react";
import { Redirect } from "react-router-dom";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("registered", true);
  }

  render() {
    return (
      <div classname="signin">
        {localStorage.getItem("registered") ? <Redirect to="/" /> : null}
        <form action="">
          <input placeholder="Логин" type="text" name="" id="login" />
          <br />
          <input placeholder="Пароль" type="password" name="" id="password" />
          <br />
          <button onClick={() => this.register()}>Принять</button>
        </form>
      </div>
    );
  }
}

export default SignInPage;
