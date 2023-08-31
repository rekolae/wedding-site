export default function Arriving() {
  return (
    <section id="home-section" className="section-primary">
      <h1 className="h1-header">Saapuminen</h1>
      <h2 className="mb-6 text-center text-2xl tracking-tighter">
        Work In Progress
      </h2>
      <div className="dark:animate-backgroundGradient rounded-lg border border-gray-200 p-[2px] shadow-lg dark:bg-gradient-to-r dark:from-teal-500 dark:via-purple-500 dark:to-orange-500 dark:shadow-cyan-700">
        <div className="dark:bg-very-dark-blue rounded bg-white p-[1px]">
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
