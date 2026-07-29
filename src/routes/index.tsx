import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/socio-minds-logo.png.asset.json";
import {
  Globe,
  Server,
  ShieldCheck,
  Smartphone,
  MessageSquare,
  Phone,
  Search,
  BarChart3,
  Map,
  FileCode2,
  Bot,
  MapPin,
  Facebook,
  Instagram,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Brochure,
});

const features = [
  { icon: Globe, title: "Professional Business Website" },
  { icon: Server, title: "Domain Registration (1 Year)" },
  { icon: Server, title: "Web Hosting (1 Year)" },
  { icon: ShieldCheck, title: "SSL Certificate" },
  { icon: Smartphone, title: "Mobile Responsive Design" },
  { icon: MessageSquare, title: "Contact Form Integration" },
  { icon: Phone, title: "WhatsApp Integration" },
  { icon: Search, title: "Google Search Console Setup" },
  { icon: BarChart3, title: "Google Analytics 4 Setup" },
  { icon: Map, title: "XML Sitemap Submission" },
  { icon: Bot, title: "Robots.txt Configuration" },
  { icon: FileCode2, title: "Basic On-Page SEO Setup" },
  { icon: MapPin, title: "Google Business Profile" },
  { icon: Facebook, title: "Facebook Business Page" },
  { icon: Instagram, title: "Instagram Business Profile" },
];

const deliverables = [
  "Fully Functional Website",
  "Domain & Hosting Configuration",
  "Search Engine Ready Website",
  "Google Analytics & Search Console Integration",
  "Google Business Profile",
  "Facebook Business Page",
  "Instagram Business Profile",
];

function Brochure() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <img src={logoAsset.url} alt="The Socio Minds" className="h-12 md:h-14 w-auto" />
          <a
            href="mailto:thesociominds@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            thesociominds@gmail.com
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full brand-gradient-soft-bg px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Presence Package
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Your business,{" "}
              <span className="brand-gradient-text">online in 15 days.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A complete launch kit — website, hosting, SEO foundation and social
              profiles — set up end‑to‑end so you can focus on your customers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://rzp.io/rzp/thesociominds"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full brand-gradient-bg px-7 py-3.5 text-base font-semibold text-white shadow-brand hover:opacity-95 transition"
              >
                Pay ₹15,000 & Get Started
              </a>
              <a
                href="mailto:thesociominds@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted transition"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl brand-gradient-soft-bg rounded-[3rem]" />
            <div className="rounded-3xl bg-card border border-border p-8 shadow-brand">
              <p className="text-sm font-medium text-muted-foreground">Package Price</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-6xl font-extrabold brand-gradient-text">
                  ₹15,000
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">All‑inclusive · One‑time</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>10–15 business days delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>SSL secured & mobile ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-primary" />
                  <span>Search engine ready from day one</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
            <p className="mt-2 text-muted-foreground">
              Fifteen essentials, one price. Everything a small business needs to look
              credible online.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-brand transition"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl brand-gradient-soft-bg p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-base leading-tight">{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl brand-gradient-bg p-8 text-white shadow-brand">
            <Clock className="h-8 w-8 opacity-90" />
            <h3 className="mt-4 text-2xl font-bold">Project Timeline</h3>
            <p className="mt-2 text-4xl font-extrabold">10–15 Business Days</p>
            <p className="mt-3 text-sm opacity-90">
              Subject to content approval. We keep you in the loop at every milestone.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-2xl font-bold">Deliverables</h3>
            <ul className="mt-5 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-border bg-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 brand-gradient-soft-bg" />
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to <span className="brand-gradient-text">go live?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Pay securely and we'll kick off within one business day.
          </p>
          <a
            href="https://rzp.io/rzp/thesociominds"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full brand-gradient-bg px-8 py-4 text-base font-semibold text-white shadow-brand hover:opacity-95 transition"
          >
            Pay ₹15,000 Now
          </a>
        </div>
      </section>

      <footer className="border-t border-border mt-10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <img src={logoAsset.url} alt="The Socio Minds" className="h-10 w-auto" />
            <p className="mt-3 text-muted-foreground">
              Helping small businesses launch and grow online.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <a
              href="mailto:thesociominds@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" /> thesociominds@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              10B, 5th Cross Rd, Saibaba Colony, K K Pudur,
              <br />
              Coimbatore, Tamil Nadu 641038
            </p>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Socio Minds. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
