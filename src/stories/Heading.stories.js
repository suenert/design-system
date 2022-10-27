import Heading from "./Heading.vue";

export default {
  title: "Example/Heading",
  component: Heading,
  argTypes: {
    level: {
      defaultValue: 1,
      control: {
        type: "select",
        options: [1, 2, 3],
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Heading },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  // template: '<Heading v-bind="args">test123</Heading>',
  template: '<Heading v-bind="args">Heading</Heading>',
});

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
};
