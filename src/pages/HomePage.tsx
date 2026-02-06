import { Link } from "react-router";
import { motion } from "motion/react";

const services = [
  {
    title: "Rekrutacja",
    description:
      "Skuteczne procesy rekrutacyjne dopasowane do specyfiki instytucji kultury i kina.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <circle cx="24" cy="18" r="6" fill="#e00371" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#e00371" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Onboarding",
    description:
      "Sprawne wdrażanie nowych pracowników, które buduje zaangażowanie od pierwszego dnia.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <path d="M16 24l6 6 10-12" stroke="#e00371" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wsparcie zespołów",
    description:
      "Budowanie silnych, zmotywowanych zespołów poprzez dedykowane programy wsparcia.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <circle cx="18" cy="20" r="4" fill="#e00371" />
        <circle cx="30" cy="20" r="4" fill="#e00371" />
        <path d="M10 36c0-5 4-9 8-9h12c4 0 8 4 8 9" stroke="#e00371" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Kultura organizacyjna",
    description:
      "Diagnoza i rozwój kultury organizacyjnej, która przyciąga i zatrzymuje talenty.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <path d="M24 14l3 6 7 1-5 5 1.2 7-6.2-3.3L17.8 33 19 26l-5-5 7-1z" fill="#e00371" />
      </svg>
    ),
  },
  {
    title: "HR strategiczny",
    description:
      "Kompleksowe doradztwo HR i budowa systemów zarządzania ludźmi w organizacji.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <rect x="16" y="20" width="16" height="12" rx="2" stroke="#e00371" strokeWidth="2" fill="none" />
        <path d="M20 20v-4a4 4 0 018 0v4" stroke="#e00371" strokeWidth="2" fill="none" />
        <circle cx="24" cy="26" r="2" fill="#e00371" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.div
            className="w-16 h-px bg-brand-pink mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.h1
            className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            ludzie z kulturą
          </motion.h1>

          <motion.p
            className="font-poppins text-xl md:text-2xl text-white mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Twój zespół. Nasza troska.
          </motion.p>

          <motion.p
            className="font-poppins text-base md:text-lg text-brand-grey mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            Tam, gdzie kultura spotyka ludzi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mt-10"
          >
            <Link
              to="/kontakt"
              className="inline-block bg-brand-pink text-white font-poppins font-semibold text-sm tracking-widest px-10 py-4 rounded-full hover:bg-brand-pink/90 transition-colors"
            >
              POROZMAWIAJMY
            </Link>
          </motion.div>

          <motion.div
            className="w-px h-16 bg-brand-pink/30 mx-auto mt-16"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          />
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#717173"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      <motion.section
        className="bg-brand-dark py-24 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                <span className="text-brand-pink">dla</span> MISJI
              </h2>
              <p className="font-poppins font-light text-brand-grey text-base md:text-lg leading-relaxed">
                Wspieramy instytucje kultury i kina w skutecznym pozyskiwaniu,
                wdrażaniu i utrzymywaniu najlepszych pracowników, zapewniając
                procesy HR dopasowane do realiów branży.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                <span className="text-brand-pink">dla</span> WIZJI
              </h2>
              <p className="font-poppins font-light text-brand-grey text-base md:text-lg leading-relaxed">
                Chcemy, aby każda instytucja kultury miała prosty, efektywny i
                powtarzalny system HR, który pozwala koncentrować się na
                tworzeniu kultury, a nie na zarządzaniu rotacją i chaosem
                kadrowym.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="bg-brand-black py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            className="font-poppins font-bold text-3xl md:text-4xl text-white mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-pink">dla</span> TWOJEJ ORGANIZACJI
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-brand-dark border border-brand-grey/20 rounded-lg p-8 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: "#e00371" }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins font-light text-brand-grey text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="bg-brand-dark py-24 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <motion.p
            className="font-poppins text-brand-grey text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start współpracy od
          </motion.p>

          <motion.h2
            className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            01<span className="text-brand-pink">.</span>2026
          </motion.h2>

          <motion.p
            className="font-poppins text-brand-grey text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Asia, Paulina, Radek
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/kontakt"
              className="inline-block bg-brand-pink text-white font-poppins font-semibold text-sm tracking-widest px-10 py-4 rounded-full hover:bg-brand-pink/90 transition-colors"
            >
              POROZMAWIAJMY
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
