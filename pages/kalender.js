import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "./components/Header.js";

const Calendars = dynamic(() => import("./components/CalendarView.js"), {
  ssr: false,
});

export default function Kalender() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Calendars />
    </div>
  );
}
