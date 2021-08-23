import React from "react";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col m-5 justify-center max-w-5xl">
      <header className="flex flex-col  justify-center py-5 bg-gray-700 ">
        <h3 className="text-4xl text-center">Välkommen</h3>
        <p className="text-2xl text-center">Logga in på ditt konto</p>
      </header>
      <LoginForm />
    </div>
  );
}
