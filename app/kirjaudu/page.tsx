"use client";

import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <section id="login-section" className="section-primary">
      <h1 className="h1-header text-3xl font-normal">Kirjautuminen</h1>
      <p className="p-text">
        Pääset kirjautumaan kutsun mukana tulleilla tunnuksilla.
      </p>
      <LoginForm />
    </section>
  );
}
