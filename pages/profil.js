import { useSession, getSession } from "next-auth/client";
import React from "react";
import Header from "./components/Header";

export default function Profil() {
  const [session] = useSession();

  if (!session)
    return (
      <div>
        <Header />
        <p>Access Denied</p>
      </div>
    );

  return (
    <div>
      <Header />
      <h2>Välkommen user, detta är profilsidan</h2>
    </div>
  );
}
