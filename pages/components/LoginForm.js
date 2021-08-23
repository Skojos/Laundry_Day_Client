import React from "react";

const LoginForm = () => {
  return (
    <form className="justify-center">
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label
          className="text-gray-700 font-bold mb-2 ml-3 text-base  "
          htmlFor="Email"
        >
          Email
        </label>
        <input
          id="email"
          className="bg-gray-200 w-full text-gray-700 focus:outline-none border-b-4 border-black-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
          type="text"
        />
      </div>
      <div className="mb-6 pt-3 rounded- bg-gray-200">
        <label
          className="text-gray-700 font-bold mb-2 ml-3 text-base  "
          htmlFor=""
        >
          Lösenord
        </label>
        <input
          className="bg-gray-200 w-full text-gray-700 focus:outline-none border-b-4 border-black-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
          type="password"
        />
      </div>
      <button
        className="w-full bg-blue-800 hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
      >
        Logga in
      </button>
    </form>
  );
};

export default LoginForm;
