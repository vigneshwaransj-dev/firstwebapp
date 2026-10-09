import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  HeartPulse,
  MapPin,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const destinations = [
  {
    country: "India",
    title: "Advanced cardiac care",
    description:
      "Bypass surgery, angioplasty and heart screenings at JCI-accredited hospitals, with internationally trained cardiologists and recovery beside the backwaters.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=960&q=85",
    alt: "Doctor discussing a treatment plan with a patient",
  },
  {
    country: "Thailand",
    title: "A smile you can’t wait to share",
    description:
      "Veneers, implants and full-mouth restoration in Bangkok’s premium dental clinics — treatment over a relaxing, tailor-made trip.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=960&q=85",
    alt: "Dentist caring for a patient in a modern clinic",
  },
  {
    country: "Malaysia",
    title: "Hip & knee replacement",
    description:
      "Robotic-assisted joint surgery with dedicated physiotherapy, a comfortable recovery stay and a clear plan for getting back to your life.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=960&q=85",
    alt: "Bright modern hospital corridor",
  },
  {
    country: "Türkiye",
    title: "Cosmetic & hair restoration",
    description:
      "Expert-led cosmetic care and hair transplant specialists, with discreet VIP transfers and personal support from arrival to aftercare.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=960&q=85",
    alt: "Healthcare professional reviewing a patient scan",
  },
  {
    country: "Singapore",
    title: "Executive health check-up",
    description:
      "A full-body, same-day health screening at Singapore’s top medical centres — with results and a specialist consultation in 48 hours.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=960&q=85",
    alt: "Calm, contemporary private hospital room",
  },
  {
    country: "Sri Lanka",
    title: "Ayurveda & recovery retreat",
    description:
      "Doctor-led Ayurvedic programmes on the southern coast — the perfect way to recover from surgery and simply reset your health.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=960&q=85",
    alt: "Peaceful tropical wellness retreat",
  },
];

const steps = [
  {
    number: "01",
    title: "Free consultation",
    description:
      "Tell us your diagnosis, reports and goals. We advise on the right treatment, hospital and destination — no obligation.",
  },
  {
    number: "02",
    title: "Specialist review",
    description:
      "Your medical reports are reviewed by specialists before you commit, with a fixed written quote.",
  },
  {
    number: "03",
    title: "Travel arranged",
    description:
      "Flights, visas, accommodation, airport transfers and a companion stay are booked and coordinated for you.",
  },
  {
    number: "04",
    title: "Care & recovery",
    description:
      "You’re met on arrival and supported throughout treatment, with follow-up care coordinated after you return home.",
  },
];

const benefits = [
  {
    title: "Accredited hospitals only",
    description:
      "We work exclusively with JCI and ISO-accredited hospitals and internationally trained specialists.",
  },
  {
    title: "Transparent, fixed pricing",
    description:
      "You receive a written quote before you travel, with no surprise charges.",
  },
  {
    title: "One dedicated care manager",
    description:
      "A single point of contact from your first enquiry until you’re safely home — and for follow-up care.",
  },
  {
    title: "Companion-friendly",
    description:
      "Family or a friend can travel with you. We arrange their accommodation, transfers and local support too.",
  },
];

const stories = [
  {
    quote:
      "I was quoted a fortune at home for a double knee replacement. Viki arranged everything — surgery in Malaysia, ten days of physio, my wife beside me. I walked home through the airport gates on my own two feet.",
    name: "Margaret T.",
    treatment: "Hip & knee replacement · Kuala Lumpur",
  },
  {
    quote:
      "Six implants in Thailand cost less than one at home, and the dentist was phenomenal. Every transfer, appointment and hotel booking was already sorted when we landed.",
    name: "David & Anne R.",
    treatment: "Full dental restoration · Bangkok",
  },
  {
    quote:
      "After my cardiac surgery I spent two weeks at an Ayurvedic retreat in Sri Lanka as part of my recovery plan. I came home healthier and more relaxed than I’ve ever been.",
    name: "Sunil P.",
    treatment: "Cardiac care + recovery retreat",
  },
];

const trustPoints = [
  "JCI-accredited hospitals",
  "Internationally trained specialists",
  "Fixed written quotes",
  "Dedicated care manager",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="relative z-20 border-b border-slate-100 bg-white">
        <div className="page-shell flex h-[76px] items-center justify-between gap-4">
          <Brand />

          <NavigationMenu
            aria-label="Main"
            className="hidden flex-none md:flex"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#offers">Offers</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#how-it-works">
                  How it works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#why-us">Why us</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#stories">
                  Patient stories
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#enquiry">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#enquiry">Enquire now</a>
            </Button>
            <details className="mobile-menu md:hidden">
              <summary aria-label="Open navigation menu">
                <span className="hidden min-[430px]:inline">Menu</span>
                <span aria-hidden="true">
                  <Menu size={18} />
                </span>
              </summary>
              <nav aria-label="Mobile" className="mobile-menu-panel">
                <a href="#offers">Offers</a>
                <a href="#how-it-works">How it works</a>
                <a href="#why-us">Why us</a>
                <a href="#stories">Patient stories</a>
                <a href="#enquiry">Contact</a>
                <Button asChild className="mt-2 w-full">
                  <a href="#enquiry">Enquire now</a>
                </Button>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-surface overflow-hidden">
          <div className="page-shell grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">
                <Sparkles size={13} aria-hidden="true" />
                Medical tourism, personally arranged
              </div>
              <h1 className="mt-6 max-w-xl text-[2.75rem] leading-[1.04] font-semibold tracking-[-0.065em] text-ink sm:text-6xl lg:text-[4.1rem]">
                World-class care.
                <span className="mt-1 block text-blue">
                  Beautiful destinations.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Viki Healthy Travels connects you with accredited hospitals
                and leading specialists across Asia and the Middle East — and
                arranges every detail of your treatment, travel and recovery,
                from first enquiry to safe return home.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                <Button asChild size="lg">
                  <a href="#enquiry">
                    Get a free consultation <ArrowRight size={16} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#offers">Browse our offers</a>
                </Button>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">
                No obligation — just honest advice on your treatment options
                and savings.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="hero-image-frame relative aspect-[1.35/1] overflow-hidden rounded-[28px] shadow-[0_24px_70px_-30px_rgba(22,74,133,0.38)]">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=90"
                  alt="Care team welcoming a patient in a bright modern hospital"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-blue text-white">
                      <HeartPulse size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        40–70% typical savings
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        on comparable treatment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur sm:flex">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Care that goes further
                </div>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} aria-hidden="true" />
                Better care, thoughtfully arranged around you.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-label="Our standards"
          className="border-y border-slate-100 bg-white"
        >
          <div className="page-shell grid grid-cols-2 gap-x-4 gap-y-4 py-5 sm:grid-cols-4 sm:gap-5">
            {trustPoints.map((point) => (
              <div
                className="flex items-center gap-2 text-xs font-medium text-ink sm:text-sm"
                key={point}
              >
                <BadgeCheck
                  size={17}
                  className="shrink-0 text-blue"
                  aria-hidden="true"
                />
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="offers" className="page-shell scroll-mt-24 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Exclusive offers"
            title="Our current medical travel offers"
            description="Hand-picked treatment packages at leading hospitals, all curated by our care team and available by enquiry. Every offer includes treatment, accommodation and on-the-ground support."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                className="offer-card group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue/20 hover:shadow-[0_18px_45px_-28px_rgba(21,74,138,0.4)]"
                key={destination.country}
              >
                <div className="relative aspect-[1.52/1] overflow-hidden bg-blue-pale">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue shadow-sm">
                    {destination.country}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">
                    {destination.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {destination.description}
                  </p>
                  <a
                    href="#enquiry"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5"
                  >
                    Enquire about this offer <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-24 bg-blue-pale py-16 sm:py-24"
        >
          <div className="page-shell">
            <SectionHeading
              eyebrow="Simple & safe"
              title="How it works"
              description="Four steps from first conversation to flying home — with a dedicated care manager at your side the whole way."
            />
            <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_-26px_rgba(20,82,145,0.42)] sm:p-6"
                  key={step.number}
                >
                  <span className="text-3xl font-semibold tracking-[-0.06em] text-blue/25">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="why-us" className="page-shell scroll-mt-24 py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative min-h-[340px] overflow-hidden rounded-[26px] shadow-[0_24px_60px_-32px_rgba(9,35,69,0.4)] sm:min-h-[470px]">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1300&q=90"
                alt="Private tropical retreat with a calm pool and palm trees"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <ShieldCheck size={17} className="text-blue" />
                  Care beyond the clinic
                </p>
                <p className="mt-1 text-xs text-muted">
                  From your first question to home again.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Why Viki Healthy Travels"
                title="Healthcare abroad, without the worry."
                description="Going overseas for treatment is a big decision. We handle the medical detail and the travel logistics, so you can focus on getting well."
              />
              <div className="mt-7 grid gap-x-7 gap-y-6 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div className="flex gap-3" key={benefit.title}>
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue/10 text-blue">
                      <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {benefit.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                href="#enquiry"
              >
                Talk to a care manager <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="stories" className="scroll-mt-24 bg-blue-pale py-16 sm:py-24">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Patient stories"
              title="Travellers who came home healthier"
              description="Real people. Thoughtful care. A little more peace of mind."
            />
            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {stories.map((story) => (
                <figure
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 sm:p-6"
                  key={story.name}
                >
                  <Quote
                    size={23}
                    fill="currentColor"
                    className="text-blue/35"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-3 flex-1 text-sm leading-6 text-ink">
                    “{story.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-ink">
                      {story.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {story.treatment}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="page-shell scroll-mt-24 py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Enquire online"
                title="Start with a free consultation"
                description="Tell us what treatment you’re considering and we’ll come back with options, indicative pricing and hospital recommendations — with no obligation."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "A response within one working day",
                  "Your medical details stay strictly confidential",
                  "Advice from real people, not a call centre",
                ].map((item) => (
                  <li
                    className="flex items-center gap-2 text-sm font-medium text-ink"
                    key={item}
                  >
                    <Check size={16} className="text-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 inline-flex rounded-2xl border border-blue-100 bg-white p-4">
                <Brand compact />
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_-42px_rgba(11,39,77,0.32)] sm:p-8">
              <form action="mailto:" method="post" encType="text/plain">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-label">
                    Full name
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="form-label">
                    Phone
                    <input
                      className="form-control"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      autoComplete="tel"
                      required
                    />
                  </label>
                  <label className="form-label sm:col-span-2">
                    Email
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                  <label className="form-label sm:col-span-2">
                    Treatment of interest
                    <select
                      className="form-control"
                      name="treatment"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Choose a treatment
                      </option>
                      <option>Cardiac care</option>
                      <option>Dental treatment</option>
                      <option>Joint replacement</option>
                      <option>Cosmetic & hair restoration</option>
                      <option>Health check-up</option>
                      <option>Wellness retreat</option>
                    </select>
                  </label>
                  <label className="form-label sm:col-span-2">
                    Tell us more
                    <textarea
                      className="form-control min-h-28 resize-y"
                      name="message"
                      placeholder="Your condition, reports you have, preferred dates…"
                      rows={4}
                    />
                  </label>
                </div>
                <Button type="submit" size="lg" className="mt-5 w-full">
                  Send my enquiry <ArrowRight size={16} />
                </Button>
                <p className="mt-3 text-center text-[11px] leading-5 text-muted">
                  Your email app will open with your enquiry ready to send.
                  Your information is never shared with third parties without
                  your consent.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071326] text-white">
        <div className="page-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:gap-16">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Viki Healthy Travels arranges world-class medical treatment,
              recovery and travel at accredited hospitals across Asia and the
              Middle East — with personal support from your first enquiry to
              your safe return home.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a className="footer-link" href="#offers">
                  Medical travel offers
                </a>
              </li>
              <li>
                <a className="footer-link" href="#how-it-works">
                  How it works
                </a>
              </li>
              <li>
                <a className="footer-link" href="#why-us">
                  Why choose us
                </a>
              </li>
              <li>
                <a className="footer-link" href="#stories">
                  Patient stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Treatments
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>Cardiac care</li>
              <li>Dental treatment</li>
              <li>Joint replacement</li>
              <li>Cosmetic & hair restoration</li>
              <li>Health check-ups</li>
              <li>Wellness retreats</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="page-shell flex flex-col gap-2 py-4 pb-20 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:pb-4">
            <p>© 2026 Viki Healthy Travels. All rights reserved.</p>
            <p>
              Information on this site is general in nature and is not a
              substitute for medical advice.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="#enquiry"
        className="mobile-sticky-cta sm:hidden"
        aria-label="Get a free medical travel consultation"
      >
        <span>Get a free consultation</span>
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
