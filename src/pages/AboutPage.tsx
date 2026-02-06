import { motion } from "motion/react"

const values = [
  "rozumiemy kulturę, nie tylko HR",
  "mówimy prostym językiem",
  "dbamy o ludzi i organizacje",
  "nie sprzedajemy rozwiązań «z szablonu»",
]

const clients = [
  "kinami studyjnymi i sieciowymi",
  "dystrybutorami filmowymi",
  "festiwalami i wydarzeniami filmowymi",
  "fundacjami i instytucjami kultury",
  "małymi zespołami kreatywnymi",
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <main className="font-poppins">
      {/* Hero Section */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6 pt-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-grey"
        >
          O nas
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-brand-pink">dla</span> POZNANIA
        </motion.h1>
      </section>

      {/* Geneza Section */}
      <section className="bg-brand-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold md:text-4xl"
          >
            Geneza
          </motion.h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-light leading-relaxed text-brand-grey"
              >
                Coraz częściej otrzymywaliśmy od naszych klientów prośby o pomoc w
                rekrutacji, onboardingu, przygotowaniu nowych osób do pracy w
                branży, podejmowaniu decyzji personalnych. Jednocześnie sami jako
                organizacja zdobyliśmy szeroką wiedzę teoretyczną oraz praktyczne
                doświadczenie dot. procesu rekrutacyjnego, roli HR-u strategicznego
                i kultury organizacyjnej.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-light leading-relaxed text-brand-grey"
              >
                W ostatnich 4 latach{" "}
                <a 
                  href="https://ferment.com.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-pink font-medium hover:underline"
                >
                  Ferment Kolektiv
                </a>{" "}
                zwiększył swoje zatrudnienie ponadtrzykrotnie.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-light leading-relaxed text-brand-grey"
              >
                W każdej rekrutacji wielokrotnie spotykamy się z opiniami kandydatów
                wyrażających wręcz ekscytację treścią ogłoszenia rekrutacyjnego,
                przejrzystością procesu, który na każdym etapie coraz bardziej
                angażuje kandydata oraz sposobem komunikacji – który przekłada się
                na employer branding przyciągający do organizacji najlepsze talenty.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-light leading-relaxed text-brand-grey"
              >
                Jednocześnie obserwujemy sporo problemów w branży, która obawia się 
                pozyskiwania talentów spoza rynku upowszechniania kultury filmowej 
                w obawie, że nie będzie w stanie przygotować szybko tych osób do 
                pracy w branży.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-light leading-relaxed text-brand-grey"
              >
                Stąd popularne „transfery", np. z jednej firmy dystrybucyjnej do 
                drugiej: nie oceniamy tego negatywnie, ale na pewno ogranicza to 
                możliwość współpracy z najlepszymi potencjalnymi kandydatami – 
                i tym samym budowania innowacyjnych zespołów.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-8 rounded-xl border border-brand-pink/20 bg-gradient-to-br from-brand-pink/10 to-transparent p-8"
              >
                <p className="text-6xl font-bold text-brand-pink md:text-7xl">
                  3×
                </p>
                <p className="mt-3 text-lg font-light text-brand-grey">
                  wzrost zatrudnienia w{" "}
                  <a 
                    href="https://ferment.com.pl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:underline"
                  >
                    Ferment Kolektiv
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HRup Section */}
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-3xl font-bold md:text-4xl"
          >
            Dlaczego <span className="text-brand-pink">HRup</span>?
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-5 rounded-xl border border-white/5 bg-brand-dark p-6 transition-all duration-300 hover:border-brand-pink/20"
              >
                <span className="text-3xl font-bold leading-none text-brand-pink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-light text-brand-grey">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="bg-brand-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-3xl font-bold uppercase tracking-tight md:text-4xl"
          >
            <span className="text-brand-pink">dla</span> KOGO PRACUJEMY
          </motion.h2>

          <div className="space-y-4">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-brand-pink py-3 pl-6 hover:bg-brand-black/30 transition-colors duration-200"
              >
                <p className="text-lg font-light text-brand-grey hover:text-white transition-colors duration-200">{client}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-3xl text-lg leading-relaxed text-white"
          >
            Znamy realia pracy w kulturze: wielozadaniowość, ograniczone
            budżety, sezonowość, presję i pasję.
          </motion.p>
        </div>
      </section>

      {/* Ferment Kolektiv Section */}
      <section className="bg-brand-black py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-brand-grey/20 bg-brand-dark p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <a 
                href="https://ferment.com.pl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/logo.webp" 
                  alt="Ferment Kolektiv" 
                  className="h-16 w-auto"
                />
              </a>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  HRup to projekt{" "}
                  <a 
                    href="https://ferment.com.pl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:underline"
                  >
                    Ferment Kolektiv
                  </a>
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  Ferment Kolektiv to zespół specjalistów wspierających instytucje kultury 
                  i kina w Polsce. Od 2019 roku budujemy narzędzia i usługi, które pomagają 
                  tworzyć lepsze doświadczenia kulturalne dla wszystkich.
                </p>
                <a 
                  href="https://ferment.com.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-brand-pink text-sm font-medium hover:underline"
                >
                  Dowiedz się więcej o Ferment Kolektiv
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12l8-8M6 4h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
