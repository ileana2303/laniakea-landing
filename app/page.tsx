import Image from "next/image";
import { LaniakeaLogo } from "@/components/LaniakeaLogo";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Check,
  Code,
  Compass,
  Layers,
  Mail,
  Phone,
  Pin,
  Spark,
  Team
} from "@/components/Icons";

const capabilities = [
  {
    icon: Code,
    kicker: "01",
    title: "Dedicated Developers",
    text: "Developers που εντάσσονται άμεσα στην ομάδα σας και δουλεύουν πάνω στο δικό σας προϊόν, workflow και stack."
  },
  {
    icon: Team,
    kicker: "02",
    title: "Team Augmentation",
    text: "Ενίσχυση υπάρχουσας ομάδας με τα skills που λείπουν, χωρίς τον χρόνο και το κόστος ενός πλήρους hiring cycle."
  },
  {
    icon: Layers,
    kicker: "03",
    title: "Project Squads",
    text: "Στοχευμένες ομάδες για συγκεκριμένο scope, feature set ή ολοκληρωμένη παράδοση project."
  }
];

const process = [
  ["Scope", "Ορίζουμε ανάγκες, διάρκεια, τεχνολογίες και τρόπο συνεργασίας."],
  ["Match", "Επιλέγουμε developers που ταιριάζουν στο project και στην ομάδα."],
  ["Integrate", "Γρήγορο onboarding στα εργαλεία και στις διαδικασίες σας."],
  ["Deliver", "Σταθερή υλοποίηση, επικοινωνία και προσαρμογή στις προτεραιότητες."]
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "REST APIs",
  "AI / Automation",
  "Cloud"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" aria-label="Laniakea home">
            <LaniakeaLogo />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/[0.55] lg:flex">
            <a className="transition hover:text-white" href="#services">Υπηρεσίες</a>
            <a className="transition hover:text-white" href="#process">Διαδικασία</a>
            <a className="transition hover:text-white" href="#stack">Tech stack</a>
            <a className="transition hover:text-white" href="#vector">Vector Dev</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.05]"
          >
            Επικοινωνία
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden border-b border-white/[0.08] pt-32">
        <div className="editorial-grid absolute inset-0 opacity-70" />
        <div className="noise absolute inset-0" />
        <div className="absolute -left-40 top-36 h-[28rem] w-[28rem] rounded-full bg-violet-600/[0.10] blur-3xl" />
        <div className="absolute right-[-10rem] top-0 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.11] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28">
          <div>
            <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/[0.60]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Developer teams for digital projects
            </div>

            <h1 className="fade-up delay-1 mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.75rem]">
              Το σωστό talent,
              <br />
              <span className="text-gradient">τη σωστή στιγμή.</span>
            </h1>

            <p className="fade-up delay-2 mt-7 max-w-2xl text-lg leading-8 text-white/[0.55] sm:text-xl">
              Η Laniakea βοηθά εταιρείες και product teams να αποκτήσουν γρήγορα
              πρόσβαση σε έμπειρους developers, χωρίς να επιβαρύνονται με
              μακροχρόνιες διαδικασίες στελέχωσης.
            </p>

            <div className="fade-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#10131a] transition hover:-translate-y-0.5 hover:bg-[#eaf7fb]"
              >
                Βρείτε developers
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Πώς συνεργαζόμαστε
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/[0.09] pt-7">
              <div>
                <p className="text-sm font-semibold">Fast matching</p>
                <p className="mt-1 text-xs text-white/[0.35]">project-first selection</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Flexible scope</p>
                <p className="mt-1 text-xs text-white/[0.35]">individuals or squads</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Technical fit</p>
                <p className="mt-1 text-xs text-white/[0.35]">Vector Dev DNA</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-8 rounded-full bg-blue-500/[0.10] blur-3xl" />
            <svg
              viewBox="0 0 560 560"
              className="relative h-auto w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbLine" x1="80" y1="440" x2="470" y2="90">
                  <stop stopColor="#8d63ff" />
                  <stop offset=".55" stopColor="#5a8dff" />
                  <stop offset="1" stopColor="#4bd9e8" />
                </linearGradient>
                <radialGradient id="core" cx="0" cy="0" r="1" gradientTransform="translate(285 270) rotate(45) scale(180)">
                  <stop stopColor="#22336d" />
                  <stop offset=".52" stopColor="#11192f" />
                  <stop offset="1" stopColor="#0b0d12" />
                </radialGradient>
              </defs>

              <circle cx="280" cy="280" r="168" fill="url(#core)" stroke="rgba(255,255,255,.08)" />
              <ellipse className="orbit-stroke" cx="280" cy="280" rx="225" ry="86" transform="rotate(-26 280 280)" stroke="url(#orbLine)" strokeWidth="1.5" fill="none" />
              <ellipse className="orbit-stroke delay" cx="280" cy="280" rx="183" ry="64" transform="rotate(31 280 280)" stroke="#6b72ff" strokeOpacity=".45" strokeWidth="1.2" fill="none" />
              <ellipse cx="280" cy="280" rx="128" ry="42" transform="rotate(-26 280 280)" stroke="#4bd9e8" strokeOpacity=".32" strokeWidth="1.1" fill="none" />

              <circle cx="280" cy="280" r="78" fill="#10182d" stroke="rgba(255,255,255,.09)" />
              <path d="M247 235 225 305c-3 10 2 17 13 17h74" fill="none" stroke="url(#orbLine)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="440" cy="186" r="13" fill="#4bd9e8" />
              <circle cx="117" cy="350" r="9" fill="#8d63ff" />
              <circle cx="391" cy="414" r="7" fill="#5a8dff" />
              <circle cx="440" cy="186" r="26" fill="#4bd9e8" opacity=".08" />
              <circle cx="117" cy="350" r="20" fill="#8d63ff" opacity=".08" />
            </svg>

            <div className="glow absolute bottom-[10%] left-[2%] rounded-2xl bg-[#11151f]/90 px-4 py-3 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/[0.30]">
                Matching principle
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Skill × Context × Timing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-[#f4f5f7] py-24 text-[#10131a] sm:py-32">
        <div className="light-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5a8dff]">
                What we do
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Developer capacity,
                <br />
                χωρίς περιττή πολυπλοκότητα.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#697181] lg:ml-auto">
              Δεν λειτουργούμε σαν γενικό recruitment agency. Ξεκινάμε από το
              project και επιλέγουμε το μοντέλο συνεργασίας που ταιριάζει
              πραγματικά στις τεχνικές και επιχειρησιακές ανάγκες.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-[1.7rem] border border-[#10131a]/10 bg-white p-7 shadow-[0_26px_60px_-48px_rgba(16,19,26,.45)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10131a] text-[#62dce9]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.18em] text-[#a0a7b3]">
                      {item.kicker}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6c7482]">{item.text}</p>
                  <div className="mt-8 h-px bg-[#10131a]/8">
                    <div className="h-px w-0 bg-gradient-to-r from-[#5a8dff] to-[#8d63ff] transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24 text-[#10131a] sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d63ff]">
                How it works
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Από το scope
                <br />
                στην παραγωγή.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-[#717987]">
                Μια απλή διαδικασία με έμφαση στην ταχύτητα, το τεχνικό fit και
                τη γρήγορη ένταξη στο project.
              </p>
            </div>

            <div className="border-t border-[#10131a]/10">
              {process.map(([title, text], index) => (
                <div
                  key={title}
                  className="grid gap-4 border-b border-[#10131a]/10 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-center"
                >
                  <span className="font-mono text-xs tracking-[0.18em] text-[#a0a7b3]">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="leading-7 text-[#737b89]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="relative overflow-hidden bg-[#0d1017] py-24 sm:py-32">
        <div className="editorial-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-48 top-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Technical coverage
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Σύγχρονο stack.
                <br />
                <span className="text-gradient">Πραγματικό project fit.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-white/[0.45]">
                Επιλέγουμε developers σύμφωνα με το περιβάλλον που ήδη
                χρησιμοποιείτε και με αυτό που θέλετε να χτίσετε.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stack.map((item, i) => (
                <div
                  key={item}
                  className="glow flex min-h-24 items-center gap-3 rounded-2xl bg-[#121621] px-4 py-4"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      i % 3 === 0
                        ? "bg-cyan-300"
                        : i % 3 === 1
                          ? "bg-blue-400"
                          : "bg-violet-400"
                    }`}
                  />
                  <span className="text-sm font-semibold text-white/[0.75]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vector" className="relative bg-[#e9edf3] py-24 text-[#10131a] sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <a
            href="https://www.vectordev.gr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Vector Dev"
            className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#10131a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5a8dff]"
          >
            <div className="absolute h-72 w-72 rounded-full border border-[#5a8dff]/30" />
            <div className="absolute h-52 w-52 rounded-full border border-[#8d63ff]/35" />
            <div className="absolute h-36 w-36 rounded-full border border-[#4bd9e8]/30" />
            <Image
              src="/vector-dev-mark.svg"
              alt="Vector Dev"
              width={200}
              height={200}
              className="relative h-44 w-44 object-contain"
            />
          </a>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5a8dff]">
              Part of Vector Dev
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Ξεχωριστή υπηρεσία.
              <br />
              <span className="text-[#66707f]">Κοινή τεχνική κουλτούρα.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#68717f]">
              Η Laniakea αποτελεί θυγατρική της Vector Dev και εστιάζει
              αποκλειστικά στην παροχή developer talent για projects και
              ομάδες. Η σχέση αυτή επιτρέπει το matching να γίνεται με
              κατανόηση software delivery και όχι μόνο με βάση ένα CV.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Project-first developer selection",
                "Τεχνικό screening με software context",
                "Ευέλικτα μοντέλα συνεργασίας",
                "Δυνατότητα σύνδεσης με Vector Dev delivery"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10131a] text-[#4bd9e8]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[#596272]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] py-20 text-[#10131a] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#10131a] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#5a8dff]/30" />
            <div className="absolute -right-4 -top-10 h-48 w-48 rounded-full border border-[#4bd9e8]/20" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <Spark className="h-4 w-4" />
                  Next project
                </div>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Χρειάζεστε επιπλέον developer capacity;
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/[0.45]">
                  Περιγράψτε μας το project και θα σας προτείνουμε τον
                  κατάλληλο τρόπο στελέχωσης.
                </p>
              </div>
              <a
                href="mailto:vectordeveloper.greece@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#10131a] transition hover:-translate-y-0.5 hover:bg-[#eaf7fb]"
              >
                Επικοινωνήστε μαζί μας
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/[0.08] bg-[#090b10]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 border-b border-white/[0.08] pb-12 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <LaniakeaLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/[0.38]">
                Developer talent για απαιτητικά ψηφιακά projects.
                <br />
                Μέλος του Vector Dev ecosystem.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-5">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Building className="h-5 w-5" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Εταιρικά στοιχεία
                  </span>
                </div>
                <div className="mt-5 space-y-2 text-sm leading-6 text-white/[0.48]">
                  <p className="font-semibold text-white/[0.82]">
                    VECTOR DEV ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ
                  </p>
                  <p>Υπηρεσίες Αναπαραγωγής Λογισμικού</p>
                  <p>ΑΦΜ: 803127713</p>
                  <p>ΔΟΥ: ΚΕΦΟΔΕ Αττικής</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-5">
                <div className="flex items-center gap-3 text-blue-300">
                  <Pin className="h-5 w-5" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Έδρα
                  </span>
                </div>
                <div className="mt-5 space-y-2 text-sm leading-6 text-white/[0.48]">
                  <p>Διγενή Γρίβα 2</p>
                  <p>Άγιος Δημήτριος</p>
                  <p>17342</p>
                  <p className="pt-2 text-xs text-white/28">
                    Laniakea — A Vector Dev Company
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-5">
                <div className="flex items-center gap-3 text-violet-300">
                  <Phone className="h-5 w-5" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    Επικοινωνία
                  </span>
                </div>
                <div className="mt-5 space-y-4 text-sm text-white/[0.52]">
                  <a
                    href="tel:+306955534076"
                    className="flex items-start gap-3 transition hover:text-white"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.14em] text-white/28">
                        Τηλ
                      </span>
                      <span className="mt-1 block">6955534076</span>
                    </span>
                  </a>
                  <a
                    href="mailto:vectordeveloper.greece@gmail.com"
                    className="flex items-start gap-3 transition hover:text-white"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.14em] text-white/28">
                        Email
                      </span>
                      <span className="mt-1 block break-all">
                        vectordeveloper.greece@gmail.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-7 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Laniakea — A Vector Dev Company.
              All rights reserved.
            </p>
            <p>Technical talent, engineered to fit.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
