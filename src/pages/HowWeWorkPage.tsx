import { Link } from "react-router";
import { motion } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const strategicTimeline = [
  {
    months: "0–1",
    goal: "Start operacyjny i oferta",
    actions: "Szablony dla Frontline, briefy dla klientów, prezentacja pakietów",
    products: "Frontline START / CORE / PRO",
    result: "Gotowa oferta rekrutacyjna, jasne ceny i pakiety",
  },
  {
    months: "1–4",
    goal: "Pierwsze wdrożenia",
    actions: "Spotkania, briefy, publikacja ogłoszeń, rozmowy, raportowanie",
    products: "Frontline START / CORE / PRO",
    result: "Pierwsze zatrudnienia, potwierdzenie wartości HRup",
  },
  {
    months: "4–6",
    goal: "Role specjalistyczne i menedżerskie",
    actions: "Profile Talent i Leader, aktywny sourcing, rozmowy kompetencyjne",
    products: "HRup Talent / Leader",
    result: "Dopasowani kandydaci na kluczowe stanowiska",
  },
  {
    months: "6–8",
    goal: "Rozbudowa onboardingu",
    actions: "Mini-onboarding, checklisty, instrukcje, check-in po 30 dniach",
    products: "Onboard",
    result: "Sprawne wdrożenie, redukcja rotacji",
  },
  {
    months: "8–10",
    goal: "Wsparcie zespołów i audyt",
    actions: "Analiza komunikacji, rozpisanie ról, warsztaty dla liderów",
    products: "Team",
    result: "Poprawa współpracy, klarowność ról",
  },
  {
    months: "10–12",
    goal: "Kultura organizacyjna",
    actions: "Analiza procesów HR, szkolenia, wdrożenie powtarzalnych procesów",
    products: "Culture",
    result: "Powtarzalne procesy, klient skupia się na tworzeniu kultury",
  },
];

const collaborationSteps = [
  {
    number: "01",
    title: "Krótka rozmowa",
    description: "Online lub offline – poznajemy Twoje wyzwania i cele rekrutacyjne",
  },
  {
    number: "02",
    title: "Doprecyzowanie potrzeb",
    description: "Wybór pakietu i szczegółów współpracy dopasowanych do Twojej organizacji",
  },
  {
    number: "03",
    title: "Podpisanie umowy",
    description: "Prosta umowa bez ukrytych klauzul – jasne zasady od początku",
  },
  {
    number: "04",
    title: "Start rekrutacji",
    description: "Rozpoczynamy działania – bez zbędnych formalności",
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="font-poppins">
      {/* Hero Section */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6 pt-8">
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

      {/* Strategic Timeline Section */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-6 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Harmonogram strategiczny
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-16 text-center text-brand-grey max-w-2xl mx-auto"
          >
            Plan rozwoju współpracy na pierwszy rok – od gotowej oferty rekrutacyjnej 
            do strategicznego partnerstwa HR
          </motion.p>

          {/* Timeline Cards for Mobile */}
          <div className="lg:hidden space-y-6">
            {strategicTimeline.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-brand-grey/20 bg-brand-black p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-brand-pink">M{phase.months}</span>
                  <div className="h-px flex-1 bg-brand-pink/30" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.goal}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-brand-grey/60 text-xs uppercase tracking-wider mb-1">Działania</p>
                    <p className="text-brand-grey">{phase.actions}</p>
                  </div>
                  <div>
                    <p className="text-brand-grey/60 text-xs uppercase tracking-wider mb-1">Produkty</p>
                    <p className="text-brand-pink font-medium">{phase.products}</p>
                  </div>
                  <div>
                    <p className="text-brand-grey/60 text-xs uppercase tracking-wider mb-1">Efekt</p>
                    <p className="text-white/80">{phase.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Table for Desktop */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-brand-grey/20 overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-black border-b border-brand-grey/20">
                    <th className="p-4 text-left text-xs font-bold text-brand-grey uppercase tracking-wider">Miesiąc</th>
                    <th className="p-4 text-left text-xs font-bold text-brand-grey uppercase tracking-wider">Cel strategiczny</th>
                    <th className="p-4 text-left text-xs font-bold text-brand-grey uppercase tracking-wider">Kluczowe działania</th>
                    <th className="p-4 text-left text-xs font-bold text-brand-grey uppercase tracking-wider">Produkty</th>
                    <th className="p-4 text-left text-xs font-bold text-brand-grey uppercase tracking-wider">Efekt dla klienta</th>
                  </tr>
                </thead>
                <tbody>
                  {strategicTimeline.map((phase, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`border-b border-brand-grey/10 ${i % 2 === 0 ? 'bg-brand-black/30' : 'bg-brand-dark'} hover:bg-brand-pink/5 transition-colors duration-200`}
                    >
                      <td className="p-4">
                        <span className="text-brand-pink font-bold text-lg">{phase.months}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-white font-semibold">{phase.goal}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-brand-grey text-sm">{phase.actions}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-brand-pink text-sm font-medium">{phase.products}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-white/80 text-sm">{phase.result}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center text-sm text-brand-grey"
          >
            * Dodatkowo: rozpoczęcie publikacji na LinkedIn
          </motion.p>
        </div>
      </section>

      {/* How Collaboration Starts Section */}
      <section className="bg-brand-black py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-6 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Jak wygląda start współpracy?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-16 text-center text-brand-grey max-w-xl mx-auto"
          >
            Bez długich formalności i bez „ukrytych etapów"
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collaborationSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="rounded-xl border border-brand-grey/20 bg-brand-dark p-6 h-full transition-all duration-300 group-hover:border-brand-pink/40 group-hover:bg-brand-dark/80">
                  <span className="block text-5xl font-bold text-brand-pink/20 mb-4 group-hover:text-brand-pink/40 transition-colors duration-300">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{step.description}</p>
                </div>
                {i < collaborationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-brand-pink/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Rozwój współpracy 0-12 miesięcy
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-brand-pink via-brand-pink/50 to-brand-pink/10 md:left-1/2 md:-translate-x-px" />

            {strategicTimeline.map((phase, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative mb-12 flex last:mb-0 md:justify-center"
                >
                  {/* Timeline dot */}
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
                    <div className="rounded-xl border border-white/5 bg-brand-black p-6 transition-colors duration-300 hover:border-brand-pink/20 max-md:border-l-2 max-md:border-l-brand-pink">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-bold text-brand-pink">
                          Miesiąc {phase.months}
                        </span>
                        <span className="inline-block rounded-full bg-brand-pink/10 px-3 py-1 text-xs text-brand-pink">
                          {phase.products}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {phase.goal}
                      </h3>
                      <p className="text-sm text-brand-grey leading-relaxed mb-3">
                        {phase.actions}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-brand-pink" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-white/80">{phase.result}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Gotowy na zmianę?
          </h2>
          <p className="mt-4 text-brand-grey max-w-lg">
            Zacznij od rozmowy – przedstaw nam swoje wyzwania, a wspólnie znajdziemy rozwiązanie.
          </p>
          <Link
            to="/kontakt"
            className="mt-10 inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-pink/80 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)]"
          >
            POROZMAWIAJMY
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
