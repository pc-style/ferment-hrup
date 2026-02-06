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
    a: "Nie w klasycznym sensie. Jesteśmy partnerem HR dla branży kulturalnej. Rekrutacja to punkt wyjścia – dbamy, by nowa osoba została w firmie na stałe. Nie pobieramy prowizji procentowej od pensji i unikamy korporacyjnych schematów.",
  },
  {
    q: "Dla jakich organizacji pracujecie?",
    a: "Kina (studyjne i sieciowe), dystrybutorzy, festiwale, fundacje, instytucje kultury oraz małe zespoły kreatywne. Rozumiemy specyfikę pracy w kulturze: wielozadaniowość i pasję połączoną z ograniczonym budżetem.",
  },
  {
    q: "Jak długo trwa rekrutacja?",
    a: "Zazwyczaj: START: 4–6 tygodni, CORE: 5–8 tygodni, PRO: 6–9 tygodni. W sytuacjach nagłych oferujemy tryb FAST.",
  },
  {
    q: "Czy zajmujecie się rozmowami z kandydatami?",
    a: "Tak – w pakietach CORE i PRO prowadzimy rozmowy rekrutacyjne. Do klienta trafiają tylko najlepiej dopasowane osoby z pełną rekomendacją.",
  },
  {
    q: "Ilu kandydatów rekomendujecie?",
    a: "Stawiamy na jakość: zwykle 2–4 kandydatów finalnych z opisem ich mocnych stron i ryzyk.",
  },
  {
    q: "Co jeśli nikt nie pasuje?",
    a: "Nie rekomendujemy nikogo \"na siłę\". Jeśli rynek nie odpowiada lub profil jest błędny – zatrzymujemy się, by wspólnie przedefiniować strategię.",
  },
  {
    q: "Czy pomagacie w onboardingu?",
    a: "Tak. W pakiecie PRO dostarczamy checklistę na 30 dni, rekomendacje dla lidera oraz przeprowadzamy check-in z pracownikiem.",
  },
  {
    q: "Co jeśli nowy pracownik odejdzie?",
    a: "Oferujemy 3-miesięczną gwarancję: w razie odejścia przeprowadzamy ponowną preselekcję bez dodatkowych kosztów (zgodnie z umową).",
  },
  {
    q: "Czy pomagacie tylko w rekrutacji?",
    a: "Nie. Często porządkujemy zakresy ról, wskazujemy ryzyka i wspieramy liderów w zarządzaniu. Rozwijamy się wraz z potrzebami klienta.",
  },
  {
    q: "Jak wygląda start współpracy?",
    a: "Krótka rozmowa → doprecyzowanie potrzeb → podpisanie umowy → start. Bez zbędnych formalności.",
  },
  {
    q: "Dlaczego HRup?",
    a: "Bo rozumiemy kulturę, mówimy ludzkim językiem i nie stosujemy rozwiązań \"z szablonu\".",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6 pt-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-grey"
        >
          FAQ
        </motion.p>
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

      {/* FAQ Accordion Section */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-[800px] px-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-b border-brand-grey/20"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-brand-pink/40 text-sm font-bold mt-0.5 group-hover:text-brand-pink transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold text-white md:text-lg group-hover:text-brand-pink transition-colors duration-200">
                    {faq.q}
                  </span>
                </div>
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
                    <p className="pb-6 pl-10 font-light leading-relaxed text-brand-grey">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Answers Section */}
      <section className="bg-brand-black py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            {...fadeUp}
            className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          >
            W skrócie
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-brand-grey/20 bg-brand-dark p-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3" stroke="#e00371" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="#e00371" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Czas rekrutacji</h3>
              <p className="text-brand-grey text-sm">4–9 tygodni w zależności od pakietu</p>
              <p className="text-brand-pink text-xs mt-2">Tryb FAST: +30% do pakietu</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-brand-grey/20 bg-brand-dark p-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="9" r="4" stroke="#e00371" strokeWidth="2"/>
                  <circle cx="15" cy="9" r="4" stroke="#e00371" strokeWidth="2"/>
                  <path d="M4 20c0-3 3-5 5-5h2M15 15h2c2 0 5 2 5 5" stroke="#e00371" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Kandydaci finałowi</h3>
              <p className="text-brand-grey text-sm">2–4 dopasowanych kandydatów z rekomendacją</p>
              <p className="text-brand-pink text-xs mt-2">Jakość, nie ilość</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-brand-grey/20 bg-brand-dark p-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" stroke="#e00371" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Gwarancja</h3>
              <p className="text-brand-grey text-sm">3 miesiące – ponowna preselekcja bez kosztów</p>
              <p className="text-brand-pink text-xs mt-2">Dbamy o długofalowy sukces</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-dark py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-[800px] flex-col items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Masz inne pytanie?
          </h2>
          <p className="mt-4 text-brand-grey">
            Napisz do nas – chętnie odpowiemy na wszystkie wątpliwości.
          </p>
          <Link
            to="/kontakt"
            className="mt-10 inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-brand-pink/80 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)]"
          >
            NAPISZ DO NAS
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
