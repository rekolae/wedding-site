import CountDownTimer from "@/components/CountdownTimer";
import ImageGrid from "@/components/ImageGrid";

export default function Home() {
  return (
    <section id="home-section" className="section-primary">
      <h1 className="h1-header">
        Tere tulemast tallinkille, sihtkohaks on Anna ja Emili pulmapidu
      </h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">🎉👰🤵🎉</h2>
      <CountDownTimer />
      <p>
        Hello this is some random text that I am currently using to make the
        space fill up enough so that I can see the changes the layout of the
        thingy!
      </p>
      <ImageGrid />
    </section>
  );
}
