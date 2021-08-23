import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "./components/Header.js";
import LoginForm from "./components/LoginForm.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laundry Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h3>Völkommen</h3>
      <button>Bokningsregler</button>
    </div>
  );
}
