import { useState } from "react"
import { motion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const packages = [
  "Template",
  "START",
  "CORE",
  "PRO",
  "FAST",
  "Onboard",
  "Team",
  "Culture",
  "Inne",
]

const team = ["Asia", "Paulina", "Radek"]

const inputClasses =
  "w-full rounded-lg border border-brand-grey/30 bg-brand-black px-4 py-3 text-white placeholder:text-brand-grey/50 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink/30 transition"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main className="font-poppins">
      <section className="flex h-[40vh] flex-col items-center justify-center bg-brand-black px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-grey"
        >
          Kontakt
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-brand-pink">dla</span> ROZMOWY
        </motion.h1>
      </section>

      <section className="bg-brand-dark py-24">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Porozmawiajmy
            </h2>
            <p className="mb-10 text-brand-grey">
              Start współpracy od: 01.2026
            </p>

            <div className="mb-10 space-y-3">
              {team.map((name, i) => (
                <motion.p
                  key={name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="border-l-2 border-brand-pink py-2 pl-5 text-lg font-light text-white"
                >
                  {name}
                </motion.p>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md leading-relaxed text-brand-grey"
            >
              Skontaktuj się z nami, aby omówić potrzeby Twojej organizacji.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-5 rounded-2xl border border-white/5 bg-brand-black/50 p-8"
            >
              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Imię i nazwisko
                </label>
                <input type="text" className={inputClasses} />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Email
                </label>
                <input type="email" className={inputClasses} />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Organizacja
                </label>
                <input type="text" className={inputClasses} />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Pakiet
                </label>
                <select className={inputClasses + " appearance-none"}>
                  <option value="" className="bg-brand-black">
                    Wybierz pakiet
                  </option>
                  {packages.map((pkg) => (
                    <option key={pkg} value={pkg} className="bg-brand-black">
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Wiadomość
                </label>
                <textarea className={inputClasses + " min-h-32 resize-y"} />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand-pink py-3 font-semibold text-white transition hover:bg-brand-pink/80"
              >
                WYŚLIJ
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center text-sm text-brand-pink"
                >
                  Wiadomość wysłana!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-black py-16">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-2xl font-bold text-white md:text-3xl">
              Ferment Kolektiv
            </p>
            <p className="mt-2 text-lg text-brand-grey">Projekt HRup</p>
            <div className="mx-auto mt-6 h-px w-24 bg-brand-pink" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
