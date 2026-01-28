import { Link } from "@tanstack/react-router";
import { IconChevronRight } from "@tabler/icons-react";
import { tools, type ToolDefinition } from "@/data/tools";

interface RelatedToolsProps {
  currentToolSlug: string;
  category?: "Images" | "Data" | "all";
  maxTools?: number;
}

export default function RelatedTools({
  currentToolSlug,
  category = "all",
  maxTools = 4,
}: RelatedToolsProps) {
  // Filter out current tool and optionally filter by category
  let relatedTools = tools.filter((tool) => tool.slug !== currentToolSlug);

  if (category !== "all") {
    // First, prioritize tools in the same category
    const sameCategory = relatedTools.filter((tool) => tool.category === category);
    const otherCategory = relatedTools.filter((tool) => tool.category !== category);
    relatedTools = [...sameCategory, ...otherCategory];
  }

  // Limit to max number of tools
  relatedTools = relatedTools.slice(0, maxTools);

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 mx-auto w-full max-w-5xl">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-100">
              {category !== "all" ? `Other ${category} Tools` : "More Tools You Might Need"}
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Explore our complete suite of free online tools
            </p>
          </div>
          <Link
            to="/tools"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover transition-colors"
          >
            View all tools
            <IconChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedTools.map((tool) => (
            <RelatedToolCard
              key={tool.slug}
              tool={tool}
            />
          ))}
        </div>

        <Link
          to="/tools"
          className="sm:hidden mt-4 inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover transition-colors"
        >
          View all tools
          <IconChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function RelatedToolCard({ tool }: { tool: ToolDefinition }) {
  const Icon = tool.icon;

  return (
    <Link
      to={tool.href}
      className="group flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-200"
    >
      <div className="shrink-0 w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors">
        <Icon className="w-5 h-5 text-brand-light" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-100 group-hover:text-brand-primary transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{tool.description}</p>
      </div>
      <IconChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
    </Link>
  );
}
