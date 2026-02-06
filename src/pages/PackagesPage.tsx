import { Link } from 'react-router'
import { motion } from 'motion/react'
import { useState } from 'react'

type PackageCategory = 'frontline' | 'talent' | 'leader'

const frontlinePackages = [
  {
    name: 'HRup Template',
    price: '2 000 zł',
    time: '2-3 tygodnie',
    description: 'Gotowy szablon dla stanowisk niespecjalistycznych',
    items: [
      'konsultacja potrzeb',
      'wzór ogłoszenia rekrutacyjnego',
      'pytania kwalifikacyjne',
      'checklist preselekcji',
      'checklist onboardingu',
    ],
    note: 'Po stronie klienta: całość procesu rekrutacji',
    target: 'Juniors / Frontline',
    featured: false,
    margin: '10–28%',
    hours: '12-15h',
  },
  {
    name: 'HRup START',
    price: '3 500 – 4 500 zł',
    time: '4-5 tygodni',
    description: 'Dla małych zespołów lub ograniczonego budżetu',
    items: [
      'konsultacja potrzeb',
      'doprecyzowanie profilu stanowiska',
      'publikacja ogłoszenia',
      'preselekcja CV',
      '3-5 rekomendowanych kandydatów',
    ],
    note: 'Rozmowy po stronie klienta',
    target: 'Frontline, Marketing, Ops',
    featured: false,
    margin: '17–46%',
    hours: '20-25h',
  },
  {
    name: 'HRup CORE',
    price: '6 000 – 7 500 zł',
    time: '5-7 tygodni',
    description: 'Najczęściej wybierany pakiet',
    items: [
      'pełny brief rekrutacyjny',
      'ogłoszenia + aktywny sourcing',
      'rozmowy rekrutacyjne HRup',
      'dopasowanie do realiów pracy w kulturze',
      'wsparcie przy decyzji końcowej',
      '3-5 kandydatów + komentarz',
    ],
    bonus: 'rekomendacja onboardingowa',
    target: 'Kierownicy, Specjaliści',
    featured: true,
    badge: 'Najczęściej wybierany',
    margin: '4–17%',
    hours: '35-40h',
  },
  {
    name: 'HRup PRO',
    price: '8 500 – 10 000 zł',
    time: '6-8 tygodni',
    description: 'Rekrutacja + ochrona przed rotacją',
    items: [
      'wszystko z pakietu CORE',
      'diagnoza ryzyk organizacyjnych',
      'wsparcie lidera',
      'onboarding 30 dni',
      '2-4 kandydatów + negocjacje',
    ],
    bonus: 'check-in po 30 dniach',
    target: 'Liderzy, Kluczowe role',
    featured: false,
    margin: '8–17%',
    hours: '50-55h',
  },
]

const talentPackages = [
  {
    name: 'HRup Talent START',
    price: '6 000 zł',
    time: '5-6 tygodni',
    description: 'Profil specjalistyczny z preselekcją',
    items: [
      'konsultacja wymagań specjalistycznych',
      'stworzenie profilu specjalistycznego',
      'publikacja ogłoszenia',
      'preselekcja kandydatów',
      'wstępne rekomendacje',
    ],
    target: 'Specjaliści, Eksperci',
    featured: false,
    margin: '43–67%',
    hours: '30-35h',
  },
  {
    name: 'HRup Talent CORE',
    price: '7 000 zł',
    time: '6-7 tygodni',
    description: 'Pełny sourcing i rozmowy kompetencyjne',
    items: [
      'wszystko z Talent START',
      'aktywny sourcing',
      'rozmowy kompetencyjne HRup',
      'szczegółowa analiza kandydatów',
      'dopasowanie kulturowe',
    ],
    target: 'Kluczowi specjaliści',
    featured: true,
    badge: 'Rekomendowany',
    margin: '17–30%',
    hours: '45-50h',
  },
  {
    name: 'HRup Talent PRO',
    price: '8 500 zł',
    time: '7-8 tygodni',
    description: 'Z wsparciem onboardingowym',
    items: [
      'wszystko z Talent CORE',
      'onboarding 30 dni',
      'monitoring wdrożenia',
      'check-in z pracownikiem i liderem',
      'wsparcie w adaptacji',
    ],
    bonus: 'gwarancja 3 miesiące',
    target: 'Kluczowe stanowiska',
    featured: false,
    margin: '6–18%',
    hours: '60-65h',
  },
]

const leaderPackages = [
  {
    name: 'HRup Leader CORE',
    price: '8 500 zł',
    time: '6-8 tygodni',
    description: 'Rekrutacja na stanowiska kierownicze',
    items: [
      'pogłębiony profil lidera',
      'aktywny sourcing w sieci kontaktów',
      'rozmowy kompetencyjne i menedżerskie',
      'assessment dopasowania do zespołu',
      'szczegółowa rekomendacja',
    ],
    target: 'Kierownicy, Dyrektorzy',
    featured: true,
    badge: 'Dla liderów',
    margin: '6–18%',
    hours: '60-65h',
  },
  {
    name: 'HRup Leader PRO',
    price: '10 000 zł',
    time: '7-9 tygodni',
    description: 'Pełne wsparcie z onboardingiem lidera',
    items: [
      'wszystko z Leader CORE',
      'onboarding lidera 30 dni',
      'wsparcie w budowaniu autorytetu',
      'check-in z zespołem',
      'monitoring adaptacji',
    ],
    bonus: 'check-in po 60 dniach',
    target: 'Kluczowe role przywódcze',
    featured: false,
    margin: '4–10%',
    hours: '75-80h',
  },
]

const additionalPackages = [
  {
    name: 'HRup FAST',
    price: '+30% do pakietu',
    description: 'Tryb pilny "na wczoraj" – skrócony proces, priorytetowy sourcing, szybka rekomendacja',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v12l8 4" stroke="#e00371" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="12" stroke="#e00371" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'HRup Onboard',
    price: '2 500 zł',
    description: 'Mini-onboarding: checklisty, instrukcje, monitoring 30-60 dni',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M8 16l6 6 10-12" stroke="#e00371" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#e00371" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'HRup Team',
    price: '3 500 zł',
    description: 'Audyt komunikacji w zespole, rozpisanie ról, warsztaty dla liderów',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="12" r="4" stroke="#e00371" strokeWidth="2"/>
        <circle cx="22" cy="12" r="4" stroke="#e00371" strokeWidth="2"/>
        <path d="M4 26c0-4 4-7 6-7h4c2 0 6 3 6 7M18 26c0-4 4-7 6-7h2c2 0 6 3 6 7" stroke="#e00371" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'HRup Culture',
    price: '3 000 zł',
    description: 'Analiza procesów HR, rekomendacje, wsparcie liderów, wdrożenie powtarzalnych procesów',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 6l3 6 7 1-5 5 1.2 6.5L16 21.5l-6.2 3L11 18l-5-5 7-1z" stroke="#e00371" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
}

const categoryTabs: { id: PackageCategory; label: string; sublabel: string }[] = [
  { id: 'frontline', label: 'Frontline', sublabel: 'Stanowiska podstawowe' },
  { id: 'talent', label: 'Talent', sublabel: 'Specjaliści' },
  { id: 'leader', label: 'Leader', sublabel: 'Stanowiska kierownicze' },
]

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>('frontline')

  const getPackages = () => {
    switch (activeCategory) {
      case 'talent':
        return talentPackages
      case 'leader':
        return leaderPackages
      default:
        return frontlinePackages
    }
  }

  const packages = getPackages()

  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center bg-brand-black px-6 pt-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm tracking-[0.3em] text-brand-grey uppercase"
        >
          Pakiety rekrutacyjne
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="text-brand-pink">dla</span> DOPASOWANIA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-center text-brand-grey leading-relaxed"
        >
          Wybierz pakiet dopasowany do Twoich potrzeb. Od szablonów dla stanowisk podstawowych, 
          przez kompleksowe rekrutacje specjalistów, po poszukiwanie liderów.
        </motion.p>
      </section>

      {/* Category Tabs */}
      <section className="bg-brand-black px-6 py-12">
        <div className="mx-auto max-w-[1280px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`group relative rounded-xl px-8 py-4 text-left transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-brand-pink text-white shadow-[0_0_30px_rgba(224,3,113,0.25)]'
                    : 'bg-brand-dark border border-brand-grey/20 text-white hover:border-brand-pink/50'
                }`}
              >
                <p className="font-bold text-lg">{tab.label}</p>
                <p className={`text-xs mt-0.5 ${activeCategory === tab.id ? 'text-white/80' : 'text-brand-grey'}`}>
                  {tab.sublabel}
                </p>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="bg-brand-dark px-6 py-16">
        <div className={`mx-auto grid max-w-[1280px] gap-6 ${
          packages.length <= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ borderColor: '#e00371', y: -4 }}
              className={`relative flex flex-col rounded-xl p-6 transition-all duration-300 ${
                pkg.featured
                  ? 'border-2 border-brand-pink shadow-[0_0_40px_rgba(224,3,113,0.15)] bg-gradient-to-b from-brand-pink/5 to-transparent'
                  : 'border border-brand-grey/20 bg-brand-black/50'
              }`}
            >
              {pkg.featured && 'badge' in pkg && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-pink px-4 py-1 text-xs font-semibold whitespace-nowrap text-white">
                  {pkg.badge}
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-bold text-brand-pink">{pkg.price}</p>
                <p className="text-xs text-brand-grey">netto</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-brand-pink/60" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 4v4l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-xs text-brand-grey">{pkg.time}</span>
              </div>

              {pkg.description && (
                <p className="mb-4 text-sm text-brand-grey leading-relaxed">{pkg.description}</p>
              )}

              <ul className="flex-1 space-y-2 mb-4">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {item}
                  </li>
                ))}
              </ul>

              {'bonus' in pkg && pkg.bonus && (
                <p className="border-t border-brand-grey/20 pt-3 text-xs text-brand-pink">
                  + {pkg.bonus}
                </p>
              )}

              {'note' in pkg && pkg.note && (
                <p className="border-t border-brand-grey/20 pt-3 text-xs text-brand-grey italic">
                  {pkg.note}
                </p>
              )}

              <div className="mt-4 pt-3 border-t border-brand-grey/10">
                <p className="text-xs text-brand-grey">
                  <span className="text-white/60">Dla:</span> {pkg.target}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-brand-black px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-3xl font-bold md:text-4xl"
          >
            Dodatkowe usługi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 text-center text-brand-grey max-w-xl mx-auto"
          >
            Uzupełnij rekrutację o wsparcie onboardingowe, zespołowe lub kulturowe
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ borderColor: '#e00371', y: -2 }}
                className="rounded-xl border border-brand-grey/20 bg-brand-dark p-6 transition-all duration-300"
              >
                <div className="mb-4">{pkg.icon}</div>
                <h3 className="text-base font-bold text-white">{pkg.name}</h3>
                <p className="mt-1 text-lg font-bold text-brand-pink">{pkg.price}</p>
                <p className="mt-3 text-sm text-brand-grey leading-relaxed">{pkg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-brand-dark px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[800px] rounded-2xl border border-brand-pink/20 bg-gradient-to-br from-brand-pink/5 to-transparent p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-pink/10 flex items-center justify-center">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path d="M16 4l4 4H28v20H4V8h8l4-4z" stroke="#e00371" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M10 18l4 4 8-8" stroke="#e00371" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">3-miesięczna gwarancja</h3>
          <p className="text-brand-grey leading-relaxed">
            W razie odejścia nowego pracownika w ciągu 3 miesięcy – przeprowadzamy ponowną preselekcję 
            kandydatów bez dodatkowych kosztów (zgodnie z warunkami umowy).
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            Nie wiesz, który pakiet wybrać?
          </h2>
          <p className="text-brand-grey mb-8 max-w-lg mx-auto">
            Porozmawiajmy o Twoich potrzebach – pomożemy dobrać najlepsze rozwiązanie.
          </p>
          <Link
            to="/kontakt"
            className="inline-block rounded-full bg-brand-pink px-10 py-4 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:bg-brand-pink/80 hover:shadow-[0_0_30px_rgba(224,3,113,0.3)]"
          >
            POROZMAWIAJMY
          </Link>
        </motion.div>
      </section>
    </>
  )
}
