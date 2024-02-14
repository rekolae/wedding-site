"use client";

import CountDownTimer from "@/components/CountdownTimer";
import ImageGrid from "@/components/ImageGrid";
import RSVPCard from "@/components/RSVPCard";
import { initPb } from "@/lib/pbHelpers";
import { useState, useEffect } from "react";

export default function Home() {
  const [isAuthenticated, setAuth] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const pb = initPb();
    setAuth(pb.authStore.isValid);
    setAdmin(pb.authStore.isAdmin);
  }, []);

  return (
    <section id="home-section" className="section-primary">
      <h1 className="h1-header font-serif text-4xl font-normal italic">
        Tervetuloa!
      </h1>
      <h2 className="mb-4 mt-4 text-center text-xl tracking-tighter">
        Juhlan alkuun aikaa:
      </h2>
      <CountDownTimer />

      <p className="p-text px-6">
        Hääjuhlassa ei ole virallista pukukoodia. Juhlavaatteet kaikissa
        väreissä ovat sallittuja, mutta pukeutua saa myös rennommin.
      </p>

      <p className="p-text">Ohjelma ja ruokalista päivitetty 14.2.</p>

      {isAuthenticated && !isAdmin ? (
        <>
          <div className="my-2">
            <RSVPCard />
          </div>
          <p className="p-text">
            Yllä näet tallentamasi ilmoittautumistiedot. RSVP:tä ei voi enää
            muokata. Lähetäthän meille viestin, jos tiedot muuttuvat.
          </p>
        </>
      ) : (
        <p className="p-text">
          Kirjautumalla sisään Kirjaudu-sivulta pääset näkemään RSVP:n tiedot ja
          muun sisällön.
        </p>
      )}

      {isAdmin ? (
        <div className="my-4">
          <h2 className="mb-6 text-center text-2xl">Admin access granted!</h2>
        </div>
      ) : null}

      <ImageGrid />
    </section>
  );
}
