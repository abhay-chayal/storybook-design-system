import ProductCard from "../components/ui/ProductCard";

export default {
  title: "Design System/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A responsive e-commerce product card featuring an image with hover zoom, optional badge, title, description, price, and an Add-to-Cart CTA button. Fully dark-mode aware.",
      },
    },
  },
  argTypes: {
    image: {
      control: { type: "text" },
      description: "URL of the product image",
    },
    title: {
      control: { type: "text" },
      description: "Product name / title",
    },
    description: {
      control: { type: "text" },
      description: "Short product description",
    },
    price: {
      control: { type: "text" },
      description: "Displayed price (string or number)",
    },
    badge: {
      control: { type: "text" },
      description: 'Optional badge label e.g. "New", "Sale", "Hot"',
    },
    onAddToCart: { action: "added to cart" },
  },
};

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  args: {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    title: "Classic Minimalist Watch",
    description:
      "A beautifully crafted timepiece with a slim profile and premium leather strap. Perfect for every occasion.",
    price: "129.99",
    badge: "New",
  },
};

export const LongDescription = {
  name: "Long Description",
  args: {
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop",
    title: "Luxury Noir Perfume — Midnight Edition",
    description:
      "An intoxicating blend of oud, black amber, and sandalwood that lingers long after you leave the room. Handcrafted by master perfumers in Grasse, France. Each bottle is individually numbered and arrives in an exclusive gift box, making it the perfect statement luxury gift for the discerning individual who values artisanal craftsmanship.",
    price: "249.00",
    badge: "Limited",
  },
};

export const SaleItem = {
  name: "Sale Item",
  args: {
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop",
    title: "Running Pro Sneakers",
    description:
      "Lightweight, breathable, and built for performance. Engineered for runners who demand the best.",
    price: "79.99",
    badge: "Sale",
  },
};

export const NoBadge = {
  name: "No Badge",
  args: {
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop",
    title: "Everyday Comfort Sneakers",
    description:
      "A clean, minimal design that transitions effortlessly from gym to street.",
    price: "59.99",
    badge: "",
  },
};
