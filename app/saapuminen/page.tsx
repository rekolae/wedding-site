export default function Arriving() {
  return (
    <section id="home-section" className="section-primary">
      <h1 className="h1-header text-3xl font-normal">Saapuminen</h1>
      <p className="p-text">
        Voit saapua juhlapaikalle omalla autolla, taksilla tai yhteisellä
        kuljetuksella. Paikalle ei pääse julkisella liikenteellä. Jos tarvitset
        juhlapaikalle tai sieltä pois kuljetuksen, otathan meihin ajoissa
        yhteyttä. Järjestämme tarpeen mukaan yhteiskuljetuksia Tampereen ja
        Pälkäneen välille. Jos saavut omalla autolla, auton voi pysäköidä
        suoraan juhlapaikan omalle parkkipaikalle. Juhlapaikka sijaitsee aivan
        Lahdentien varressa. Hyvä tuntomerkki juhlapaikan risteykselle on
        strutsitilan kyltti, jota seuraamalla käännytte Lahdentieltä oikeaan
        suuntaan.
      </p>
      <div className="rounded-lg border border-gray-200 p-[2px] shadow-lg dark:animate-backgroundGradient dark:border-none dark:bg-gradient-to-r dark:from-teal-500 dark:via-purple-500 dark:to-orange-500 dark:shadow-cyan-700">
        <div className="rounded bg-white p-[1px] dark:bg-very-dark-blue">
          <iframe
            src={process.env.MAPS_ADDR!}
            width="100%"
            height="600"
            style={{ border: 0, borderRadius: 4 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
