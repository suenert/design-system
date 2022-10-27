import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    kind: {
      defaultValue: "primary",
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost", "critical"],
      },
    },
    size: {
      defaultValue: "md",
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    disabled: {
      control: "boolean",
    },
    // onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  label: "Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: "ghost",
  label: "Button",
};
