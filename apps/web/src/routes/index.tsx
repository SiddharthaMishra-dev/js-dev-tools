import type { ReactNode } from "react";

import {
  IconBolt,
  IconBrandGithub,
  IconChevronRight,
  IconLock,
  IconSearch,
} from "@tabler/icons-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import GlowCard from "@/components/ui/GlowCard";
import { tools } from "@/data/tools";

import { getSeoMetadata } from "@/lib/seo";

const featuredTools = tools.slice(0, 6);

export const Route = createFileRoute("/")({
  head: () =>
    getSeoMetadata({
      title: "JS DevTools | Privacy-first online tools for everyone",
      description:
        "All-in-one, privacy-first tools for images and data. Convert, compress, crop, format JSON, and more—100% client-side with zero uploads.",
      keywords: [
        "online tools",
        "image to base64",
        "image compressor",
        "image converter",
        "json formatter",
        "csv to xlsx",
        "privacy-first tools",
        "client-side utilities",
      ],
      url: "/",
    }),
  component: App,
});

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <section className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
            Get things done faster with <span className="text-brand-primary">client-side</span>{" "}
            tools
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Lightning-fast image and data utilities for everyone. Zero uploads, zero tracking, and
            metadata tuned for better search visibility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/tools"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors duration-200 text-sm font-medium"
            >
              <span>Browse all tools</span>
              <IconChevronRight className="h-4 w-4" />
            </Link>

            <a
              href="https://github.com/SiddharthaMishra-dev/js-dev-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
            >
              <IconBrandGithub className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              100% client-side
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              No account. No uploads.
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Open source & auditable
            </span>
          </div>
        </div>
      </section>

      <main
        className="flex-1 px-4 pb-16 relative z-10"
        id="tools"
      >
        <section className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div>
              <p className="text-sm text-brand-light font-semibold uppercase tracking-wide">
                Featured tools
              </p>
              <h2 className="text-2xl font-bold text-gray-100">Get the essentials in one place</h2>
              <p className="text-sm text-gray-300 mt-1">
                Clear descriptions, privacy-first defaults, and instant results right in your
                browser.
              </p>
            </div>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover"
            >
              See catalog
              <IconChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <GlowCard
                  key={tool.slug}
                  to={tool.href}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors ease-in-out">
                        <Icon className="text-brand-light" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-brand-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{tool.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tool.keywords.slice(0, 2).map((keyword) => (
                          <span
                            key={keyword}
                            className="text-[11px] uppercase tracking-wide text-brand-light bg-white/5 border border-white/10 rounded-full px-2 py-1"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-brand-primary text-sm font-medium">
                        <span>Open tool</span>
                        <IconChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-8">Why people trust JS DevTools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<IconBolt className="text-brand-light w-6 h-6" />}
              title="Instant processing"
              description="Runs entirely in your browser for near-zero latency."
            />
            <FeatureCard
              icon={<IconLock className="text-brand-light w-6 h-6" />}
              title="Complete privacy"
              description="No uploads or accounts. Your files never leave your device."
            />
            <FeatureCard
              icon={<IconBrandGithub className="text-brand-light w-6 h-6" />}
              title="Open source"
              description="Inspect, fork, and contribute. Transparency by default."
            />
            <FeatureCard
              icon={<IconSearch className="text-brand-light w-6 h-6" />}
              title="SEO friendly"
              description="Structured content and clear copy to help tools rank."
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-sm text-brand-light uppercase tracking-wide">
            Build once, reuse everywhere
          </p>
          <h3 className="text-2xl font-semibold text-gray-100 mt-2">
            A dedicated tools page keeps everything indexable and easy to discover
          </h3>
          <p className="text-gray-300 mt-3">
            Every tool gets focused copy, keywords, and internal links to improve crawlability while
            keeping the experience fast and privacy-first.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/tools"
              className="px-5 py-2.5 bg-brand-primary text-white rounded-lg text-sm font-semibold hover:bg-brand-hover transition-colors"
            >
              Go to tools page
            </Link>
            <a
              href="#tools"
              className="px-5 py-2.5 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Explore featured tools
            </a>
          </div>
        </section>
      </main>

      <footer className="pb-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-xs">
            Crafted with care by{" "}
            <a
              href="https://sidme.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-hover transition-colors"
            >
              sidme
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/SiddharthaMishra-dev/js-dev-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-hover transition-colors"
            >
              Open Source on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-100">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
