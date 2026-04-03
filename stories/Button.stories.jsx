import Button from "../components/ui/Button";

export default {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with primary and secondary variants, loading state, and full accessibility support.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Visual style of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the button and prevents interaction",
    },
    loading: {
      control: { type: "boolean" },
      description: "Shows a loading spinner and disables interaction",
    },
    children: {
      control: { type: "text" },
      description: "Button label text",
    },
    onClick: { action: "clicked" },
  },
};

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Primary = {
  args: {
    variant: "primary",
    children: "Get Started",
    disabled: false,
    loading: false,
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Learn More",
    disabled: false,
    loading: false,
  },
};

export const Disabled = {
  args: {
    variant: "primary",
    children: "Unavailable",
    disabled: true,
    loading: false,
  },
};

export const Loading = {
  args: {
    variant: "primary",
    children: "Saving…",
    disabled: false,
    loading: true,
  },
};

export const SecondaryDisabled = {
  name: "Secondary Disabled",
  args: {
    variant: "secondary",
    children: "Not Available",
    disabled: true,
    loading: false,
  },
};
