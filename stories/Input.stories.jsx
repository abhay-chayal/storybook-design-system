import Input from "../components/ui/Input";

export default {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled input field with contextual icons, label support, focus ring, and disabled state — fully dark-mode aware.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
      description: "HTML input type",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text shown inside the input",
    },
    label: {
      control: { type: "text" },
      description: "Optional visible label above the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input and visual feedback",
    },
  },
};

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  args: {
    type: "text",
    placeholder: "Search products…",
    label: "Search",
    disabled: false,
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    disabled: false,
  },
};

export const Email = {
  args: {
    type: "email",
    placeholder: "you@example.com",
    label: "Email address",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    type: "text",
    placeholder: "Field is disabled",
    label: "Disabled field",
    disabled: true,
  },
};

export const NoLabel = {
  name: "Without Label",
  args: {
    type: "text",
    placeholder: "No label shown…",
    label: "",
    disabled: false,
  },
};
