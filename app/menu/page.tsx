export default function Menu() {
  return (
    <section id="menu-section" className="section-primary">
      <h1 className="h1-header text-3xl font-normal">Häämenu</h1>
      <p className="p-text px-6">
        Kaikki ruoat ovat laktoosittomia, M = maidoton, G = gluteeniton.
      </p>
      <div className="mx-auto my-5 text-center">
        <div className="px-6">
          <h2 className="text-2xl font-semibold">Alkupalat</h2>

          <h3 className="text-lg">
            Mansikka-melonisalaattia tuoreella mintulla (M, G)
          </h3>
          <h3 className="text-lg">
            Päärynä-briejuustosalaattia pekaanipähkinöillä (G)
          </h3>
          <h3 className="text-lg">
            Pestomarinoitua rucola-pastasalaattia parmesanjuustolla
          </h3>

          <h3 className="mt-5 text-lg">Savuporo-rieskarullia</h3>
          <h3 className="text-lg">
            Chilimarinoituja kanavartaita ja mangorajaa (M, G)
          </h3>
          <h3 className="text-lg">
            Kylmäsavulohta (M, G) ja piparjuurismetanaa (G)
          </h3>
          <h3 className="text-lg">
            Härän paahtopaistia ja mustaherukkahyytelöä (M, G)
          </h3>
        </div>
        <div className="mt-7 px-6">
          <h2 className="text-2xl font-semibold">Pääruoka</h2>

          <h3 className="text-lg">Rosmariiniperunoita (M, G)</h3>
          <h3 className="text-lg">
            Paahdettua kalkkunanrintaa (M, G) ja appelsiinikastiketta (G)
          </h3>
          <h3 className="text-lg">
            Pekoni-ranskankermalla täytettyjä portobellosieniä (G)
          </h3>
          <h3 className="text-lg">Bataatti-ruusukaalipaistosta (M, G)</h3>
        </div>
        <div className="mt-7 px-6">
          <h2 className="text-2xl font-semibold">Jälkiruoka</h2>

          <h3 className="text-lg">Hääkakku - puolukka-kinuski-moussekakku</h3>
          <h3 className="text-lg">Suklaapikkuleivät</h3>
          <h3 className="text-lg">Fariinimarengit (M, G)</h3>
          <h3 className="text-lg">Macarons - lakritsi, vanilja, caramel (G)</h3>
          <h3 className="text-lg">Kahvi & tee</h3>
        </div>
      </div>
    </section>
  );
}
