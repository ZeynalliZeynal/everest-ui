import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { FiCheck, FiPlus } from "react-icons/fi";

type ButtonProps = React.ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "ghost"],
    },
    iconOnly: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    prefix: {
      control: false,
    },
    suffix: {
      control: false,
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
    disabled: false,
    iconOnly: false,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="tertiary">
        Tertiary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="xs">
        Extra Small
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} prefix={<FiPlus />}>
        Add
      </Button>
      <Button {...args} suffix={<FiCheck />}>
        Confirm
      </Button>
      <Button {...args} iconOnly prefix={<FiPlus />} />
    </div>
  ),
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} disabled variant="primary">
        Primary
      </Button>
      <Button {...args} disabled variant="secondary">
        Secondary
      </Button>
      <Button {...args} disabled variant="tertiary">
        Tertiary
      </Button>
      <Button {...args} disabled variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
  },
};
