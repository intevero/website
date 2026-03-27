export default function InteveroLandingPage() {
  const services = [
    {
      title: "Instalacje wodno-kanalizacyjne",
      desc: "Kompleksowe wykonawstwo oraz modernizacje instalacji wodnych i kanalizacyjnych w budynkach mieszkalnych, użytkowych i przemysłowych.",
    },
    {
      title: "Instalacje grzewcze",
      desc: "Systemy centralnego ogrzewania, rozdzielacze, obiegi, modernizacje i optymalizacja pracy instalacji grzewczych.",
    },
    {
      title: "Instalacje gazowe",
      desc: "Bezpieczne i zgodne z wymaganiami wykonawstwo instalacji gazowych wraz z modernizacją istniejących układów.",
    },
    {
      title: "Węzły cieplne i kotłownie",
      desc: "Montaż, przebudowa, serwis i usprawnianie pracy węzłów cieplnych oraz kotłowni dla budynków i obiektów technicznych.",
    },
  ];

  const automationFeatures = [
    "Sterowanie ogrzewaniem i temperaturą w strefach",
    "Zdalna kontrola oświetlenia i obwodów elektrycznych",
    "Scenariusze i harmonogramy pracy budynku",
    "Zarządzanie roletami, bramami i urządzeniami wykonawczymi",
    "Monitoring zużycia energii i optymalizacja kosztów",
    "Integracja funkcji bezpieczeństwa i komfortu",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_22%),linear-gradient(180deg,_#06101d_0%,_#0b1728_55%,_#0f172a_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm text-sky-200">
                INTEVERO · Instalacje i automatyka budynkowa
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Techniczne wykonawstwo i inteligentne sterowanie budynkiem w jednym miejscu.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Łączymy solidne instalacje budynkowe z nowoczesną automatyką opartą na systemie FHome. Wykonujemy, modernizujemy, uruchamiamy i wspieramy technicznie rozwiązania, które realnie podnoszą komfort, bezpieczeństwo i kontrolę nad obiektem.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#instalacje"
                  className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Poznaj zakres instalacji
                </a>
                <a
                  href="#automatyka"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
                >
                  Zobacz automatykę FHome
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Dział instalacji
                </div>
                <div className="text-2xl font-semibold text-white">Budynki, kotłownie, węzły cieplne i kompletne układy instalacyjne</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Od klasycznej infrastruktury technicznej po modernizacje i serwis istniejących rozwiązań.
                </p>
              </div>
              <div className="rounded-[28px] border border-sky-400/20 bg-sky-500/10 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                  Dział automatyki
                </div>
                <div className="text-2xl font-semibold text-white">FHome i inteligentne sterowanie budynkiem bez ograniczeń scenariusza</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Jako wsparcie serwisowe producenta F&F pomagamy wdrażać, utrzymywać i rozwijać automatykę budynkową w praktyce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="instalacje" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Dział instalacji</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Fundament techniczny budynku zaczyna się od dobrze wykonanej instalacji.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Realizujemy i modernizujemy kluczowe układy techniczne budynków. Stawiamy na sprawdzone wykonawstwo, właściwy dobór rozwiązań i praktyczne podejście do eksploatacji oraz serwisu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl bg-sky-400/10 ring-1 ring-sky-400/20" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="automatyka" className="border-y border-white/10 bg-[linear-gradient(180deg,_rgba(14,165,233,0.10),_rgba(15,23,42,0.0)_35%,_rgba(15,23,42,0.0)_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Automatyka budynkowa</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              FHome — budynek, który reaguje, przewiduje i daje pełną kontrolę.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Automatyka budynkowa to nie gadżet. To realne narzędzie do zarządzania komfortem, energią, bezpieczeństwem i codziennym funkcjonowaniem obiektu. System FHome otwiera praktycznie nieograniczone możliwości konfiguracji i sterowania, a my wspieramy jego wdrożenie oraz serwis jako zaplecze techniczne producenta F&F.
            </p>
            <div className="mt-8 rounded-[28px] border border-sky-400/20 bg-sky-500/10 p-6 text-slate-100 shadow-2xl shadow-sky-950/20">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Wsparcie serwisowe dla F&F</p>
              <p className="mt-3 text-base leading-7 text-slate-100">
                Zapewniamy zaplecze techniczne, uruchomieniowe i serwisowe dla rozwiązań opartych na systemie FHome — od diagnostyki po rozwój funkcjonalności budynku.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {automationFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20 backdrop-blur-sm"
              >
                <div className="mb-3 h-2.5 w-14 rounded-full bg-sky-400/80" />
                <p className="text-base font-medium leading-7 text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Podejście Intevero</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Łączymy klasyczną technikę instalacyjną z inteligentnym sterowaniem budynkiem.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Dzięki temu inwestor nie dostaje przypadkowego zbioru rozwiązań, tylko spójny system działania obiektu — od źródła ciepła i węzła, po automatykę, która realnie zarządza codzienną pracą budynku.
              </p>
            </div>
            <div className="grid gap-4 rounded-[28px] bg-slate-900/80 p-6 ring-1 ring-white/10">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Kontakt</div>
                <div className="mt-2 text-xl font-semibold text-white">INTEVERO Sp. z o.o.</div>
              </div>
              <div className="text-slate-300">biuro@intevero.pl</div>
              <div className="text-slate-300">+48 606 725 748</div>
              <button className="mt-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100">
                Umów rozmowę techniczną
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
