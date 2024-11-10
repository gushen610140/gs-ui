import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { GsButton } from "gs-ui";

type Story = StoryObj<typeof GsButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof GsButton> = {
  title: "Example/Button",
  component: GsButton,
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    round: {
      control: "boolean",
    },
    circle: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    autofocus: {
      control: "boolean",
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loading: {
      control: "boolean",
    },
    loadingIcon: {
      control: { type: "text" },
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    slot: {
      control: { type: "text" },
    },
  },
  args: {
    onClick: fn(),
    slot: "Button",
    type: "primary",
  },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story = {
  render: (args) => ({
    components: { GsButton },
    setup() {
      return { args };
    },
    template: container(
      `<gs-button v-bind="args">{{args.slot}}</gs-button>`
    ),
  }),

  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);

    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    await expect(args.onClick).toHaveBeenCalled();
  },
};

export default meta;
