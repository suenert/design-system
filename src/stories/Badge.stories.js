import Badge from "./Badge.vue";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      defaultValue: "gray",
      control: {
        type: "select",
        options: [
          "gray",
          "red",
          "yellow",
          "green",
          "blue",
          "indigo",
          "purple",
          "pink",
        ],
      },
    },
    large: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Badge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Badge v-bind="args">Badge</Badge>',
});

export const Playground = Template.bind({});
Playground.args = {
  color: "gray",
};

export const Overview = (args, { argTypes }) => ({
  components: { Badge },
  setup() {
    const { options } = argTypes.color.control;
    return { options };
  },

  template: `
    <Badge v-for="option in options" :color="option">Badge</Badge>
    <br />
    <br />
    <Badge v-for="option in options" large :color="option">Badge</Badge>
    `,
});

export const TruncatedBadge = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },

  template: `
    <div class="max-w-xl border border-purple-400">
        <div class="flex">
            <Badge
                v-for="n in 10"
                :key="n"
                color="green"
                :truncate="args.truncate"
            >
                Content that may grow way too big
            </Badge>
        </div>
    </div>
    `,
});
TruncatedBadge.args = {
  truncate: true,
};
