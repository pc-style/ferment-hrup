import { useState } from "react"
import { motion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const packages = [
  { group: "Frontline", items: ["Template", "START", "CORE", "PRO"] },
  { group: "Talent", items: ["START", "CORE", "PRO"] },
  { group: "Leader", items: ["CORE", "PRO"] },
  { group: "Dodatkowe", items: ["FAST", "Onboard", "Team", "Culture"] },
]

const team = [
  { name: "Asia", role: "HR & Rekrutacja" },
  { name: "Paulina", role: "Processes & Culture" },
]

const inputClasses =
  "w-full rounded-lg border border-brand-grey/30 bg-brand-black px-4 py-3 text-white placeholder:text-brand-grey/50 focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink/30 transition"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

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

      {/* Contact Form Section */}
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
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-brand-grey text-sm">Start współpracy od:</span>
              <span className="text-2xl font-bold text-white">06<span className="text-brand-pink">.</span>2026</span>
            </div>
            <p className="mb-8 text-brand-grey">
              Konsultacje możliwe już teraz – skontaktuj się z naszym zespołem.
            </p>

            <div className="mb-10 space-y-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 rounded-xl bg-brand-black/50 border border-brand-grey/10 p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-pink font-bold">{member.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{member.name}</p>
                    <p className="text-brand-grey text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-xl border border-brand-pink/20 bg-gradient-to-br from-brand-pink/5 to-transparent p-6"
            >
              <p className="text-white font-semibold mb-2">Jak wygląda start?</p>
              <p className="text-brand-grey text-sm leading-relaxed">
                Krótka rozmowa → doprecyzowanie potrzeb → wybór pakietu → podpisanie umowy → start. 
                Bez zbędnych formalności.
              </p>
            </motion.div>
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
                  Imię i nazwisko *
                </label>
                <input type="text" required className={inputClasses} placeholder="Jan Kowalski" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Email *
                </label>
                <input type="email" required className={inputClasses} placeholder="jan@example.com" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Organizacja
                </label>
                <input type="text" className={inputClasses} placeholder="Nazwa organizacji" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Interesujący pakiet
                </label>
                <select className={inputClasses + " appearance-none"}>
                  <option value="" className="bg-brand-black">
                    Wybierz pakiet (opcjonalnie)
                  </option>
                  {packages.map((group) => (
                    <optgroup key={group.group} label={group.group} className="bg-brand-black">
                      {group.items.map((pkg) => (
                        <option key={`${group.group}-${pkg}`} value={`${group.group} ${pkg}`} className="bg-brand-black">
                          {group.group} {pkg}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Inne" className="bg-brand-black">
                    Inne / Nie wiem jeszcze
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-brand-grey">
                  Wiadomość
                </label>
                <textarea 
                  className={inputClasses + " min-h-32 resize-y"} 
                  placeholder="Opowiedz nam o swoich potrzebach rekrutacyjnych..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand-pink py-4 font-semibold text-white transition-all duration-300 hover:bg-brand-pink/80 hover:shadow-[0_0_20px_rgba(224,3,113,0.2)]"
              >
                WYŚLIJ WIADOMOŚĆ
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center rounded-lg bg-brand-pink/10 border border-brand-pink/20 p-4"
                >
                  <p className="text-brand-pink font-medium">
                    Dziękujemy! Wiadomość została wysłana.
                  </p>
                  <p className="text-brand-grey text-sm mt-1">
                    Odezwiemy się najszybciej jak to możliwe.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Ferment Kolektiv Section */}
      <section className="bg-brand-black py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-center"
          >
            <a 
              href="https://ferment.com.pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/logo.webp" 
                alt="Ferment" 
                className="h-10 w-auto"
              />
            </a>
            <div className="h-8 w-px bg-brand-grey/30 hidden md:block" />
            <div>
              <p className="text-white font-medium">
                HRup to część kolektywu{" "}
                <a 
                  href="https://ferment.com.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-pink hover:underline"
                >
                  Ferment
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
