import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";
import "../styles/styles.scss";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};