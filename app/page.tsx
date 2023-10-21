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
      <h1 className="h1-header">
        Tere tulemast tallinkille, sihtkohaks on Anna ja Emili pulmapidu
      </h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">🎉👰🤵🎉</h2>
      <CountDownTimer />

      {isAuthenticated && !isAdmin ? (
        <div className="my-2">
          <RSVPCard />
        </div>
      ) : null}

      {isAdmin ? (
        <div className="my-4">
          <h2 className="mb-6 text-center text-2xl">Admin access granted!</h2>
        </div>
      ) : null}

      <p>
        Hello this is some random text that I am currently using to make the
        space fill up enough so that I can see the changes the layout of the
        thingy!
      </p>
      <ImageGrid />
    </section>
  );
}
