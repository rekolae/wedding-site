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

      {isAuthenticated && !isAdmin ? (
        <>
          <div className="my-2">
            <RSVPCard />
          </div>
          <p className="p-text">
            Tallennathan yllä olevaan lomakkeeseen tiedon osallistumisestasi
            hääjuhlaan. Lisää myös mahdolliset muut lisätiedot (allergiat,
            avecin nimi ym.). Lomake on pariskunta/perhekohtainen, joten jos
            joku kutsussa nimellä mainituista henkilöistä ei pääse
            osallistumaan, ilmoitathan myös sen lisätiedoissa. Voit muokata
            ilmoittautumista ja lisätietoja 15.1.2024 asti.
          </p>
        </>
      ) : (
        <p className="p-text">
          Kirjautumalla sisään Kirjaudu-sivulta pääset muokkaamaan RSVP:n
          tietoja ja näkemään muun sisällön.
        </p>
      )}

      {isAdmin ? (
        <div className="my-4">
          <h2 className="mb-6 text-center text-2xl">Admin access granted!</h2>
        </div>
      ) : null}

      <p className="p-text">
        Mozilla Firefoxilla on ongelmia näyttää osa kuvista, nettisivua
        kannattaa käyttää millä tahansa muulla selaimella parhaan kokemuksen
        saavuttamiseksi.
      </p>
      <p className="p-text text-5xl">🦊🔫</p>
      <ImageGrid />
    </section>
  );
}
