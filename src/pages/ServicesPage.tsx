import { Link } from "react-router";
import { motion } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const strategicHRItems = [
  "Projektowanie struktury organizacji w oparciu o role i potrzeby biznesowe",
  "Tworzenie i monitorowanie parametrów dot. zaangażowania, efektywności i produktywności",
  "Tworzenie kultury organizacyjnej wspierającej odpowiedzialność",
];

const recruitmentSteps = [
  "Stworzenie profilu idealnego kandydata",
  "Stworzenie przyciągającego uwagę ogłoszenia rekrutacyjnego i/lub innych materiałów marketingowych (foto/video)",
  "Zaprojektowanie kampanii reklamowej (performance w SoMe, serwisy rekrutacyjne, działania analogowe)",
  "Przeprowadzenie pełnego procesu rekrutacji: preselekcja aplikacji, rozmowy badające postawę, przygotowanie mentalne, kwalifikacje i dopasowanie do zespołu",
  "Analiza zadań rekrutacyjnych i rozmowy finałowe",
  "Właściwe przekazywanie informacji odmownych",
];

const onboardingItems = [
  "Mapowanie kompetencji potrzebnych do pracy",
  "Uzupełnienie wiedzy o rynku i jego mechanizmach",
  "Wyznaczenie parametrów sukcesu na stanowisku",
  "Monitorowanie i optymalizacja",
  "Ścieżka off-boarding: bezpieczne i pełne szacunku rozstanie z pracownikiem",
];

const trainingTopics = [
  "Budowanie kultury feedbacku",
  "Rola empatii w komunikacji i współpracy",
  "Delegowanie odpowiedzialności",
  "Przejrzystość ról i stanowisk",
  "Modelowanie kultury higieny pracy i wellbeingu",
  "Standardy rozwiązywania konfliktów w zespole",
];

const teamMembers = [
  { name: "Asia", role: "HR & Rekrutacja" },
  { name: "Paulina", role: "Processes & Culture" },
];

export default function ServicesPage() {
  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6 pt-8">
        <motion.h1
          {...fadeUp}
          className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-brand-pink">dla</span> ROZWOJU
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-4 text-lg text-brand-grey md:text-xl"
        >
          Zakres proponowanych usług
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[1280px] space-y-0">
          {/* Onboarding & Off-boarding */}
          <motion.div
            {...fadeUp}
            className="grid gap-12 bg-brand-dark px-6 py-16 md:grid-cols-2 md:items-center md:gap-16"
          >
            <div className="flex items-center justify-center md:order-2">
              <div className="relative">
                <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-pink/5 border border-brand-pink/20">
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 36h40M36 16v40"
                      stroke="#e00371"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 24l24 24M48 24L24 48"
                      stroke="#e00371"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Pomoc we wdrożeniach i off-boardingu
              </h2>
              <ul className="mt-6 space-y-4">
                {onboardingItems.map((item, i) => (
                  <motion.li
                    key={i}
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-3 text-brand-grey"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Rekrutacje */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="grid gap-12 bg-brand-black px-6 py-16 md:grid-cols-2 md:items-start md:gap-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Rekrutacje na stanowiska funkcyjne
              </h2>
              <p className="mt-4 text-brand-grey">
                Kompleksowy proces rekrutacji od A do Z.
              </p>
            </div>
            <div className="relative space-y-6 pl-8">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-brand-pink via-brand-pink/50 to-brand-pink/20" />
              {recruitmentSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="relative flex items-start gap-5"
                >
                  <span className="absolute -left-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white shadow-[0_0_20px_rgba(224,3,113,0.3)]">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-brand-grey">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Szkolenia */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="bg-brand-dark px-6 py-16"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Szkolenia kompetencji menedżerskich
                </h2>
                <p className="mt-4 text-brand-grey">
                  Rozwijamy umiejętności liderów i zespołów w obszarach kluczowych 
                  dla efektywnego zarządzania w branży kulturalnej.
                </p>
              </div>
              <ul className="space-y-4">
                {trainingTopics.map((topic, i) => (
                  <motion.li
                    key={i}
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-center gap-3 text-brand-grey"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink/40" />
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* HR Strategiczny */}
          <motion.div
            {...fadeUp}
            className="grid gap-12 bg-brand-black px-6 py-16 md:grid-cols-2 md:items-center md:gap-16"
          >
            <div className="flex items-center justify-center md:order-2">
              <div className="relative">
                <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-pink/5 border border-brand-pink/20">
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="12"
                      y="12"
                      width="48"
                      height="48"
                      rx="8"
                      stroke="#e00371"
                      strokeWidth="2.5"
                    />
                    <circle cx="36" cy="30" r="8" stroke="#e00371" strokeWidth="2.5" />
                    <path
                      d="M20 54c0-8.837 7.163-16 16-16s16 7.163 16 16"
                      stroke="#e00371"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                HR Strategiczny na godziny
              </h2>
              <span className="inline-block rounded-full bg-brand-pink/20 border border-brand-pink/40 px-4 py-1 text-xs font-semibold tracking-wider text-brand-pink uppercase mt-3">
                Dalszy etap
              </span>
              <ul className="mt-6 space-y-4">
                {strategicHRItems.map((item, i) => (
                  <motion.li
                    key={i}
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="flex items-start gap-3 text-brand-grey"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Section */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-brand-pink/20 bg-gradient-to-br from-brand-pink/10 to-transparent p-8 md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
                  Start działalności
                </h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-brand-pink">06</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">.</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">2026</span>
                </div>
                <p className="text-brand-grey leading-relaxed">
                  Konsultacje możliwe już teraz – skontaktuj się z naszym zespołem, 
                  aby omówić Twoje potrzeby i zaplanować współpracę.
                </p>
              </div>
              <div>
                <p className="text-brand-grey/60 text-xs uppercase tracking-wider mb-4">Zespół HRup</p>
                <div className="space-y-4">
                  {teamMembers.map((member, i) => (
                    <motion.div
                      key={i}
                      {...fadeIn}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="flex items-center gap-4 rounded-xl bg-brand-black/50 p-4 border border-brand-grey/10"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center">
                        <span className="text-brand-pink font-bold">{member.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">{member.name}</p>
                        <p className="text-brand-grey text-sm">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Harmonogram Section */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
          >
            WIESZ CO CIĘ CZEKA<span className="text-brand-pink">.</span> PRZYKŁAD<span className="text-brand-pink">:</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-12 text-center text-brand-grey max-w-2xl mx-auto -mt-10"
          >
            Przykładowy harmonogram współpracy – pakiet HRup Frontline
          </motion.p>

          <div className="relative space-y-6 pl-8">
            <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-brand-pink via-brand-pink/50 to-brand-pink/20" />
            {[
              { step: 1, title: "Pierwszy kontakt", time: "45–60 min", desc: "Poznanie potrzeb i ustalenie zakresu współpracy" },
              { step: 2, title: "Doprecyzowanie profilu stanowiska", time: "1–1,5 h", desc: "Ujednolicenie oczekiwań i kryteriów" },
              { step: 3, title: "Publikacja ogłoszenia i preselekcja", time: "2–3 dni", desc: "Zebranie zgłoszeń i przygotowanie listy kandydatów" },
              { step: 4, title: "Spotkania z kandydatami", time: "20–30 min / kandydat", desc: "Rekomendacje i przekazanie kandydatów do finalnej decyzji" },
              { step: 5, title: "Finalizacja rekrutacji i oferta", time: "15–30 min", desc: "Zatrudnienie i ustalenie warunków pracy" },
              { step: 6, title: "Wdrożenie i onboarding", time: "14 dni checklista", desc: "Szybkie wdrożenie nowego pracownika (opcjonalnie)" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeIn}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative flex items-start gap-5"
              >
                <span className="absolute -left-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white shadow-[0_0_20px_rgba(224,3,113,0.3)]">
                  {item.step}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-white">{item.title}</p>
                    <span className="text-xs text-brand-pink">{item.time}</span>
                  </div>
                  <p className="text-brand-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
            Chcesz wiedzieć więcej?
          </h2>
          <p className="mt-4 text-brand-grey max-w-lg">
            Sprawdź nasze pakiety cenowe lub skontaktuj się bezpośrednio z zespołem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/pakiety"
              className="inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-pink/80 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)]"
            >
              ZOBACZ PAKIETY
            </Link>
            <Link
              to="/kontakt"
              className="inline-block rounded-full border-2 border-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-brand-pink uppercase transition-all duration-300 hover:bg-brand-pink hover:text-white"
            >
              KONTAKT
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
