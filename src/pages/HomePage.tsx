import { Link } from "react-router";
import { motion } from "motion/react";

const services = [
  {
    title: "Onboarding",
    description:
      "Mapowanie kompetencji, checklisty wdrożeniowe, monitoring i wsparcie przez pierwsze 30-60 dni.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <path d="M24 14v10l7 4" stroke="#e00371" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Rekrutacja",
    description:
      "Pełny proces rekrutacyjny – od profilu kandydata, przez ogłoszenia i sourcing, po rozmowy i rekomendacje.",
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
      "Audyt komunikacji, klarowność ról, warsztaty dla liderów i poprawa współpracy w zespole.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <circle cx="17" cy="20" r="2" fill="#e00371" />
        <circle cx="31" cy="20" r="2" fill="#e00371" />
        <path d="M16 30c2 4 6 6 8 6s6-2 8-6" stroke="#e00371" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Kultura organizacyjna",
    description:
      "Analiza procesów HR, rekomendacje zmian i wdrożenie powtarzalnych systemów – by klient skupił się na tworzeniu kultury.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <path d="M24 14l3 6 7 1-5 5 1.2 7-6.2-3.3L17.8 33 19 26l-5-5 7-1z" fill="#e00371" />
      </svg>
    ),
  },
  {
    title: "HR Strategiczny",
    description:
      "Projektowanie struktury organizacji, monitorowanie parametrów zaangażowania i budowanie kultury organizacyjnej.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#e00371" strokeWidth="2" fill="none" />
        <circle cx="24" cy="18" r="6" fill="#e00371" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#e00371" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

const clients = [
  "Kina studyjne i sieciowe",
  "Dystrybutorzy filmowi",
  "Festiwale i wydarzenia filmowe",
  "Fundacje i instytucje kultury",
  "Małe zespoły kreatywne",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-pink/3 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <motion.div
            className="w-16 h-px bg-brand-pink mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.p
            className="font-poppins text-sm tracking-[0.3em] text-brand-grey uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            HRup – Twój partner HR dla branży kulturalnej
          </motion.p>

          <motion.h1
            className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mt-10"
          >
            <Link
              to="/kontakt"
              className="inline-block bg-brand-pink text-white font-poppins font-semibold text-sm tracking-widest px-10 py-4 rounded-full hover:bg-brand-pink/90 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)] transition-all duration-300"
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

      {/* Mission & Vision Section */}
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
                WIZJA
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
                WIZJA
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

      {/* Services Section */}
      <section className="bg-brand-black py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-pink">dla</span> TWOJEJ ORGANIZACJI
          </motion.h2>
          <motion.p
            className="font-poppins text-brand-grey text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Zakres proponowanych usług – od HR strategicznego, przez rekrutacje, 
            po budowanie kultury organizacyjnej
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-brand-dark border border-brand-grey/20 rounded-xl p-8 transition-all duration-300 group hover:border-brand-pink/40 hover:shadow-[0_0_30px_rgba(224,3,113,0.08)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{service.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins font-light text-brand-grey text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/uslugi"
              className="inline-block border-2 border-brand-pink text-brand-pink font-poppins font-semibold text-sm tracking-widest px-8 py-3 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300"
            >
              ZOBACZ WSZYSTKIE USŁUGI
            </Link>
          </motion.div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="bg-brand-dark py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            className="font-poppins font-bold text-3xl md:text-4xl text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-pink">dla</span> KOGO PRACUJEMY
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {clients.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-brand-pink py-3 pl-6 hover:bg-brand-black/30 transition-colors duration-200"
                >
                  <p className="font-poppins text-lg text-brand-grey hover:text-white transition-colors duration-200">{client}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center"
            >
              <p className="font-poppins text-lg md:text-xl leading-relaxed text-white">
                Znamy realia pracy w kulturze: wielozadaniowość, ograniczone
                budżety, sezonowość, presję i pasję. Dlatego nasze rozwiązania 
                są dopasowane do specyfiki branży.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Date Section */}
      <motion.section
        className="bg-brand-black py-24 md:py-32"
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
            Start działalności od
          </motion.p>

          <motion.h2
            className="font-poppins font-bold text-5xl md:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            06<span className="text-brand-pink">.</span>2026
          </motion.h2>

          <motion.p
            className="font-poppins text-brand-grey text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Konsultacje możliwe już teraz
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="text-brand-pink font-medium">Asia</span>
            <span className="text-brand-grey">•</span>
            <span className="text-brand-pink font-medium">Paulina</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/kontakt"
              className="inline-block bg-brand-pink text-white font-poppins font-semibold text-sm tracking-widest px-10 py-4 rounded-full hover:bg-brand-pink/90 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)] transition-all duration-300"
            >
              POROZMAWIAJMY
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
