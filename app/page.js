import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ProductCard from "@/components/ui/ProductCard";

export const metadata = {
  title: "Component Design System | Storybook + Next.js",
  description:
    "A production-grade component design system built with Next.js, Tailwind CSS, and Storybook. Showcasing Button, Input, and ProductCard components.",
};

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    title: "Classic Minimalist Watch",
    description:
      "A beautifully crafted timepiece with a slim profile and premium leather strap. Perfect for every occasion.",
    price: "129.99",
    badge: "New",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop",
    title: "Luxury Noir Perfume",
    description:
      "An intoxicating blend of oud, black amber, and sandalwood that lingers long after you leave the room.",
    price: "249.00",
    badge: "Limited",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop",
    title: "Running Pro Sneakers",
    description:
      "Lightweight, breathable, and built for performance. Engineered for runners who demand the best.",
    price: "79.99",
    badge: "Sale",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <header className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Design System
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Component Design System
          </h1>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            A production-grade UI library built with Next.js 16, Tailwind CSS
            v4 &amp; Storybook 8. Modular, accessible, and beautiful.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">
              View on Storybook
            </Button>
            <Button variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Button Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Button
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
            Supports <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">primary</code>,{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">secondary</code>, disabled, and loading states.
          </p>
          <div className="flex flex-wrap gap-4 items-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" loading>Loading…</Button>
            <Button variant="secondary" disabled>Secondary Disabled</Button>
          </div>
        </section>

        {/* Input Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Input
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
            Text, password, and email types with label, icon, focus ring, and disabled state.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <Input label="Search" placeholder="Search products…" type="text" />
            <Input label="Password" placeholder="Enter your password" type="password" />
            <Input label="Email" placeholder="you@example.com" type="email" />
            <Input label="Disabled Field" placeholder="Not editable" disabled />
          </div>
        </section>

        {/* ProductCard Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            ProductCard
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
            Responsive card with image zoom, badge, description, price, and Add-to-Cart CTA.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Footer note */}
        <footer className="text-center text-slate-400 dark:text-slate-600 text-sm pb-8">
          Built with Next.js 16 · Tailwind CSS v4 · Storybook 8 · Run{" "}
          <code className="bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded">
            npm run storybook
          </code>{" "}
          to open the interactive dashboard.
        </footer>
      </div>
    </main>
  );
}
