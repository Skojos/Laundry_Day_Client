import Image from "next/image";
import {
  UserIcon,
  LoginIcon,
  LogoutIcon,
  CalendarIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import React from "react";
import { signin, signIn, signout, signOut, useSession } from "next-auth/client";
import logo from "../../public/logo-ld.png";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [session] = useSession();
  const [status, setStatus] = useState(false);

  return (
    <header className="flex flex-col bg-gray-800 sm:flex-row  justify-between items-center z-50">
      <div className="flex flex-grow space-x-14 mt-10 justify-evenly max-w-2xl">
        <HeaderItem title="Hem" Icon={HomeIcon} link="" />
        <HeaderItem title="Kalender" Icon={CalendarIcon} link="kalender" />
        <HeaderItem title="Profil" Icon={UserIcon} link="profil" />
        {!session ? (
          <HeaderItem title="Logga in" Icon={LoginIcon} onClick={signIn} />
        ) : (
          <HeaderItem title="Logga ut" Icon={LogoutIcon} onClick={signOut} />
        )}
      </div>
      <Image
        className="object-contain"
        src={logo}
        width={200}
        height={150}
        alt="logo"
      />
    </header>
  );
};

export default Header;
