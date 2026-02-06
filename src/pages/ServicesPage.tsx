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

const recruitmentSteps = [
  "Stworzenie profilu idealnego kandydata",
  "Stworzenie przyciągającego uwagę ogłoszenia rekrutacyjnego i/lub innych materiałów marketingowych",
  "Zaprojektowanie kampanii reklamowej dotyczącej rekrutacji",
  "Przeprowadzenie pełnego procesu rekrutacji (preselekcja, rozmowy, analiza zadań, rozmowy finałowe, informacje odmowne)",
];

const onboardingItems = [
  "Mapowanie kompetencji",
  "Uzupełnienie wiedzy o rynku",
  "Wyznaczenie parametrów",
  "Monitorowanie i optymalizacja",
  "Ścieżka off-boarding",
];

const trainingTopics = [
  "Budowanie kultury feedbacku",
  "Rola empatii w komunikacji",
  "Delegowanie odpowiedzialności",
  "Przejrzystość ról",
  "Modelowanie kultury higieny pracy",
  "Rozwiązywanie problemów w zespole",
];

export default function ServicesPage() {
  return (
    <main className="font-poppins">
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6">
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
          Nasze usługi
        </motion.p>
      </section>

      <section className="bg-brand-dark py-24">
        <div className="mx-auto max-w-[1280px] space-y-0">
          <motion.div
            {...fadeUp}
            className="grid gap-12 bg-brand-dark px-6 py-20 md:grid-cols-2 md:items-center md:gap-16"
          >
            <div className="flex items-center justify-center md:order-2">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-brand-pink/10">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="8"
                    width="48"
                    height="48"
                    rx="8"
                    stroke="#e00371"
                    strokeWidth="3"
                  />
                  <circle cx="32" cy="28" r="8" stroke="#e00371" strokeWidth="3" />
                  <path
                    d="M18 50c0-7.732 6.268-14 14-14s14 6.268 14 14"
                    stroke="#e00371"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                HR Strategiczny na godziny
              </h2>
              <p className="mt-6 leading-relaxed text-brand-grey">
                Projektowanie struktury organizacji w oparciu o role i potrzeby
                biznesowe, tworzenie i monitorowanie parametrów dot. zaangażowania,
                efektywności i produktywności, tworzenie kultury organizacyjnej
                wspierającej odpowiedzialność.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="grid gap-12 bg-brand-black px-6 py-20 md:grid-cols-2 md:items-start md:gap-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Rekrutacje na stanowiska funkcyjne
              </h2>
              <p className="mt-4 text-brand-grey">
                Kompleksowy proces rekrutacji od A do Z.
              </p>
            </div>
            <div className="relative space-y-8 pl-8">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-brand-pink/30" />
              {recruitmentSteps.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                  className="relative flex items-start gap-5"
                >
                  <span className="absolute -left-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-brand-grey">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="grid gap-12 bg-brand-dark px-6 py-20 md:grid-cols-2 md:items-center md:gap-16"
          >
            <div className="flex items-center justify-center md:order-2">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-brand-pink/10">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 32h40M32 12v40"
                    stroke="#e00371"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 20l24 24M44 20L20 44"
                    stroke="#e00371"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
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
                    className="flex items-center gap-3 text-brand-grey"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="bg-brand-black px-6 py-20"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Szkolenia
                  </h2>
                  <span className="rounded-full bg-brand-pink px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase">
                    Wkrótce
                  </span>
                </div>
                <p className="mt-4 text-sm text-brand-grey">na dalszym etapie</p>
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
        </div>
      </section>

      <section className="bg-brand-black py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Chcesz wiedzieć więcej?
          </h2>
          <Link
            to="/pakiety"
            className="mt-10 inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-brand-pink/80"
          >
            ZOBACZ PAKIETY
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
