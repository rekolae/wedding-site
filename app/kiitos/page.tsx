"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYou() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 5000);
  }, []);

  return (
    <section id="thanks-section" className="section-primary">
      <h1 className="h1-header text-3xl font-normal">Kiitos vierailusta!</h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">
        Toivottavasti nähdään häissä!
      </h2>
    </section>
  );
}
