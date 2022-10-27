import Text from "./Text.vue";

export default {
  title: "Example/Text",
  component: Text,
  argTypes: {
    size: {
      defaultValue: "base",
      control: {
        type: "select",
        options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"],
      },
    },
    weight: {
      defaultValue: "normal",
      control: {
        type: "select",
        options: ["normal", "medium", "bold"],
      },
    },
    align: {
      defaultValue: "default",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    truncate: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Text v-bind="args">Example Text</Text>',
});

export const Component = Template.bind({});

const TruncateTemplate = (args, { argTypes }) => ({
  components: { Text },

  setup() {
    return { args };
  },

  template: `
    <div class="border border-purple-600" style="width: 215px">
        <Text v-bind="args">Really long text that won’t fit in the layout</Text>
    </div>
    `,
});

export const Truncate = TruncateTemplate.bind({});
Truncate.args = {
  truncate: true,
};
