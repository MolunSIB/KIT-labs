import React from "react";

const MainPage = () => {
  return (
    <div className="MainPage">
      {!localStorage.getItem("registered") ? (
        <p>Регистрация бесплатно</p>
      ) : (
        <p>
          Добро пожаловать, <b>{localStorage.getItem("login")}</b>!
        </p>
      )}
    </div>
  );
};

export default MainPage;
