export const dynamic = "force-dynamic";

import CountDownTimer from "@/components/CountdownTimer";
import ImageGrid from "@/components/ImageGrid";
import RSVPCard from "@/components/RSVPCard";
import RSVPSkeleton from "@/components/RSVPSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <section id="home-section" className="section-primary">
      <h1 className="h1-header font-serif italic text-3xl font-normal">
        Tervetuloa!
      </h1>
      <h2 className="mt-4 mb-4 text-center text-base tracking-tighter">Juhlan alkuun aikaa:</h2>
      <CountDownTimer />

      <div className="my-2">
        <Suspense fallback={<RSVPSkeleton />}>
          <RSVPCard />
        </Suspense>
      </div>

      <p className="text-center">
        Tallennathan yllä olevaan lomakkeeseen tiedon osallistumisestasi hääjuhlaan. Lisää
        myös mahdolliset muut lisätiedot (allergiat, avecin nimi ym.). Lomake on 
        pariskunta/perhekohtainen, joten jos joku kutsussa nimellä mainituista henkilöistä 
        ei pääse osallistumaan, ilmoitathan myös sen lisätiedoissa. Voit muokata
        ilmoittautumista ja lisätietoja 15.1.2024 asti.
      </p>
      <ImageGrid />
    </section>
  );
}
