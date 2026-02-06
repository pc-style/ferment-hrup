import { Link } from 'react-router'
import { motion } from 'motion/react'

const mainPackages = [
  {
    name: 'HRup Template',
    price: '2 000 zł netto',
    time: '2-3 tygodnie',
    description: 'Gotowy szablon rekrutacyjny',
    items: [
      'konsultacja potrzeb',
      'wzór ogłoszenia',
      'pytania kwalifikacyjne',
      'check-lista preselekcji',
      'check-lista onboardingu',
    ],
    note: 'Po stronie klienta: całość procesu',
    featured: false,
  },
  {
    name: 'HRup START',
    price: '3 500 – 4 500 zł netto',
    time: '4-5 tygodni',
    description:
      'Dla małych zespołów, pierwszej rekrutacji albo ograniczonego budżetu',
    items: [
      'konsultacja potrzeb',
      'doprecyzowanie profilu stanowiska',
      'publikacja ogłoszenia + sourcing',
      'preselekcja CV',
      '3-5 rekomendowanych kandydatów',
    ],
    featured: false,
  },
  {
    name: 'HRup CORE',
    price: '6 000 – 7 500 zł netto',
    time: '5-7 tygodni',
    description: undefined,
    items: [
      'pełny brief rekrutacyjny',
      'doprecyzowanie zakresu obowiązków',
      'aktywny sourcing + ogłoszenia',
      'preselekcja + rozmowy HRup',
      'dopasowanie do realiów pracy w kulturze',
      'wsparcie przy decyzji końcowej',
      '2-4 kandydatów finalnych',
      'wsparcie przy ofercie i negocjacjach',
    ],
    bonus: 'krótka rekomendacja onboardingowa',
    featured: true,
    badge: 'Najczęściej wybierany',
  },
  {
    name: 'HRup PRO',
    price: '8 500 – 10 000 zł netto',
    time: '6-8 tygodni',
    description: 'Rekrutacja + realne zabezpieczenie przed rotacją',
    items: [
      'wszystko z pakietu CORE',
      'pogłębione rozmowy kompetencyjne',
      'diagnoza ryzyk',
      'wsparcie lidera',
      'onboarding 30 dni',
    ],
    bonus: 'check-in po 30 dni',
    featured: false,
  },
]

const additionalPackages = [
  {
    name: 'HRup FAST',
    price: '+30% do wybranego pakietu',
    description: 'Skrócony proces, priorytetowy sourcing',
  },
  {
    name: 'HRup Onboard',
    price: '2 500 zł netto',
    description: 'Mini-onboarding checklist, monitoring 30-60 dni',
  },
  {
    name: 'HRup Team',
    price: '3 500 zł netto',
    description: 'Audyt komunikacji, rozpisanie ról, warsztat',
  },
  {
    name: 'HRup Culture',
    price: '3 000 zł netto',
    description: 'Rekomendacje procesów HR, szkolenia',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
}

export default function PackagesPage() {
  return (
    <>
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm tracking-[0.3em] text-brand-grey uppercase"
        >
          Pakiety
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-brand-pink">dla</span> DOPASOWANIA
        </motion.h1>
      </section>

      <section className="bg-brand-dark px-6 py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mainPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ borderColor: '#e00371' }}
              className={`relative flex flex-col rounded-xl p-6 transition-shadow ${
                pkg.featured
                  ? 'scale-[1.03] border-2 border-brand-pink shadow-[0_0_40px_rgba(224,3,113,0.15)] lg:scale-105'
                  : 'border border-brand-grey/20'
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-pink px-4 py-1 text-xs font-semibold whitespace-nowrap text-white">
                  {pkg.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
              <p className="mt-1 text-xl font-bold text-brand-pink">
                {pkg.price}
              </p>
              <p className="mt-1 text-xs text-brand-grey">
                Czas: {pkg.time}
              </p>

              {pkg.description && (
                <p className="mt-3 text-sm text-brand-grey">
                  {pkg.description}
                </p>
              )}

              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {pkg.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {item}
                  </li>
                ))}
              </ul>

              {'bonus' in pkg && pkg.bonus && (
                <p className="mt-4 border-t border-brand-grey/20 pt-3 text-xs text-brand-pink">
                  + {pkg.bonus}
                </p>
              )}

              {'note' in pkg && pkg.note && (
                <p className="mt-4 border-t border-brand-grey/20 pt-3 text-xs text-brand-grey italic">
                  {pkg.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            Dodatkowe usługi
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ borderColor: '#e00371' }}
                className="rounded-xl border border-brand-grey/20 p-6"
              >
                <h3 className="text-base font-bold text-white">{pkg.name}</h3>
                <p className="mt-1 text-lg font-bold text-brand-pink">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm text-brand-grey">
                  {pkg.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/kontakt"
            className="inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white transition-opacity hover:opacity-90"
          >
            POROZMAWIAJMY
          </Link>
        </motion.div>
      </section>
    </>
  )
}
