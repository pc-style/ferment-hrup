import { Link } from "react-router";
import { motion } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const phases = [
  {
    months: "0-1",
    title: "Start operacyjny",
    items: [
      "Opracowanie szablonów rekrutacyjnych",
      "Przygotowanie briefu dla klienta",
      "Stworzenie materiałów ofertowych",
      "Produkty: Frontline START / CORE / PRO",
    ],
  },
  {
    months: "1-4",
    title: "Pierwsze wdrożenia",
    items: [
      "Spotkania z klientami",
      "Publikacja ogłoszeń i preselekcja CV",
      "Prowadzenie rozmów kandydatów",
      "Raportowanie i rekomendacja",
    ],
  },
  {
    months: "4-6",
    title: "Rozwój oferty",
    items: [
      "Profil stanowisk specjalistycznych",
      "Aktywny sourcing i preselekcja",
      "Rozmowy kompetencyjne HRup",
      "Produkty: Talent / Leader START / CORE / PRO",
    ],
  },
  {
    months: "6-8",
    title: "Rozbudowa onboardingu",
    items: [
      "Mini-onboarding dla nowych pracowników",
      "Przygotowanie checklist i instrukcji",
      "Check-in po 30 dniach",
    ],
  },
  {
    months: "8-10",
    title: "Wsparcie zespołów",
    items: [
      "Analiza komunikacji w zespole",
      "Warsztat dla zespołów / liderów",
      "Wdrożenie rekomendacji",
    ],
  },
  {
    months: "10-12",
    title: "Kultura organizacyjna",
    items: [
      "Analiza procesów HR",
      "Szkolenia dla liderów",
      "Rekomendacje zmian",
      "HRup staje się strategicznym partnerem",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="font-poppins">
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6">
        <motion.h1
          {...fadeUp}
          className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-brand-pink">dla</span> PLANU
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-4 text-lg text-brand-grey md:text-xl"
        >
          Jak działamy
        </motion.p>
      </section>

      <section className="bg-brand-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-20 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Plan działania 0-12 miesięcy
          </motion.h2>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-brand-pink/30 md:left-1/2 md:-translate-x-px" />

            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative mb-16 flex last:mb-0 md:justify-center"
                >
                  <div className="absolute top-2 left-4 z-10 md:left-1/2 md:-translate-x-1/2">
                    <span className="relative block h-4 w-4 rounded-full bg-brand-pink">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-pink/40" />
                    </span>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -40 : 40,
                      y: 20,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.1 }}
                    className={`ml-12 w-full md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div className="rounded-xl border border-white/5 bg-brand-black p-6 transition-colors duration-300 hover:border-brand-pink/20 md:border-l-0 max-md:border-l-2 max-md:border-l-brand-pink">
                      <p className="text-lg font-bold text-brand-pink">
                        Miesiąc {phase.months}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white">
                        {phase.title}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {phase.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-brand-grey"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Gotowy na zmianę?
          </h2>
          <Link
            to="/kontakt"
            className="mt-10 inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-brand-pink/80"
          >
            POROZMAWIAJMY
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
