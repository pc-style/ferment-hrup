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
      <section className="flex h-[40vh] flex-col items-center justify-center bg-brand-black px-6 text-center">
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

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 max-w-3xl font-light leading-relaxed text-brand-grey"
          >
            Coraz częściej otrzymywaliśmy od naszych klientów prośby o pomoc w
            rekrutacji, onboardingu, przygotowaniu nowych osób do pracy w
            branży, podejmowaniu decyzji personalnych. Jednocześnie sami jako
            organizacja zdobyliśmy szeroką wiedzę teoretyczną oraz praktyczne
            doświadczenie dot. procesu rekrutacyjnego, roli HR-u strategicznego
            i kultury organizacyjnej. W ostatnich 4 latach Ferment Kolektiv
            zwiększył swoje zatrudnienie ponadtrzykrotnie, zaś w procesach
            rekrutacyjnych wzięło udział ok. 1200 kandydatów i kandydatek.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 max-w-3xl font-light leading-relaxed text-brand-grey"
          >
            W każdej rekrutacji wielokrotnie spotykamy się z opiniami kandydatów
            wyrażających wręcz ekscytację treścią ogłoszenia rekrutacyjnego,
            przejrzystością procesu, który na każdym etapie coraz bardziej
            angażuje kandydata oraz sposobem komunikacji – który przekłada się
            na employer branding przyciągający do organizacji najlepsze talenty.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12"
          >
            <p className="text-7xl font-bold text-brand-pink md:text-9xl">
              1200+
            </p>
            <p className="mt-3 text-lg font-light text-brand-grey md:text-xl">
              kandydatów w procesach rekrutacyjnych
            </p>
          </motion.div>
        </div>
      </section>

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
                className="flex items-start gap-5 rounded-xl border border-white/5 bg-brand-dark p-6"
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
                className="border-l-2 border-brand-pink py-3 pl-6"
              >
                <p className="text-lg font-light text-brand-grey">{client}</p>
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
    </main>
  )
}
