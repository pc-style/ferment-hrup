import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const faqs = [
  {
    q: "Czy HRup to agencja rekrutacyjna?",
    a: 'Nie w klasycznym sensie. HRup to partner HR dla branży kulturalnej. Rekrutacja jest punktem wyjścia, ale pracujemy tak, żeby nowa osoba rzeczywiście została, a nie „tylko się znalazła". Nie rozliczamy się procentem od pensji, nie działamy masowo, nie kopiujemy korporacyjnych procesów.',
  },
  {
    q: "Dla jakich organizacji pracujecie?",
    a: "Współpracujemy m.in. z: kinami studyjnymi i sieciowymi, dystrybutorami filmowymi, festiwalami i wydarzeniami filmowymi, fundacjami i instytucjami kultury, małymi zespołami kreatywnymi. Znamy realia pracy w kulturze: wielozadaniowość, ograniczone budżety, sezonowość, presję i pasję.",
  },
  {
    q: "Jak długo trwa rekrutacja?",
    a: "Zazwyczaj: HRup START: 4-6 tygodni, HRup CORE: 5-8 tygodni, HRup PRO: 6-9 tygodni. Czas zależy od poziomu stanowiska, dostępności kandydatów i szybkości decyzji po stronie klienta. W sytuacjach pilnych oferujemy tryb HRup FAST.",
  },
  {
    q: "Czy zajmujecie się rozmowami z kandydatami?",
    a: "Tak – w pakietach CORE i PRO prowadzimy rozmowy rekrutacyjne HRup. Do klienta trafiają tylko najlepiej dopasowani kandydaci, wraz z rekomendacją i komentarzem.",
  },
  {
    q: "Ilu kandydatów rekomendujecie?",
    a: "Zawsze stawiamy na jakość, nie ilość: zwykle 2-4 kandydatów finalnych, każdy z jasnym opisem mocnych stron i potencjalnych ryzyk.",
  },
  {
    q: "Co jeśli nikt nie pasuje?",
    a: 'Nie rekomendujemy kandydatów „na siłę". Jeśli profil jest źle zdefiniowany, rynek nie odpowiada na ofertę, lub problem leży w organizacji pracy – zatrzymujemy się, omawiamy sytuację i wspólnie decydujemy o dalszych krokach.',
  },
  {
    q: "Czy pomagacie w onboardingu?",
    a: "Tak. W pakiecie PRO oraz jako opcja dodatkowa: dostarczamy checklistę onboardingową na 30 dni, rekomendacje dla lidera, check-in po 30 dni. To znacząco zmniejsza ryzyko szybkiego odejścia nowej osoby.",
  },
  {
    q: "Co jeśli nowy pracownik odejdzie?",
    a: "HRup oferuje 3-miesięczną gwarancję: w razie odejścia – ponowna preselekcja kandydatów, bez dodatkowych kosztów (zgodnie z warunkami umowy).",
  },
  {
    q: "Czy pomagacie tylko w rekrutacji?",
    a: "Zaczynamy od rekrutacji, ale bardzo często: porządkujemy zakresy ról, wskazujemy ryzyka organizacyjne, wspieramy liderów w pracy z zespołem. HRup rozwija się razem z klientem.",
  },
  {
    q: "Jak wygląda start współpracy?",
    a: '1. Krótka rozmowa (online / offline) 2. Doprecyzowanie potrzeb i wyboru pakietu 3. Podpisanie umowy 4. Start rekrutacji. Bez długich formalności i bez „ukrytych etapów".',
  },
  {
    q: "Dlaczego HRup?",
    a: 'Bo: rozumiemy kulturę, nie tylko HR; mówimy prostym językiem; dbamy o ludzi i organizacje; nie sprzedajemy rozwiązań „z szablonu".',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="font-poppins">
      <section className="flex h-[40vh] flex-col items-center justify-center bg-brand-black px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-brand-pink">dla</span> ODPOWIEDZI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-lg text-brand-grey md:text-xl"
        >
          Najczęściej zadawane pytania
        </motion.p>
      </section>

      <section className="bg-brand-dark py-24">
        <div className="mx-auto max-w-[800px] px-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-brand-grey/20"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base font-bold text-white md:text-lg">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0 text-2xl leading-none text-brand-pink"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-light leading-relaxed text-brand-grey">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-[800px] flex-col items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Masz inne pytanie?
          </h2>
          <Link
            to="/kontakt"
            className="mt-10 inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-brand-pink/80"
          >
            NAPISZ DO NAS
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
