import ContentBlock from "./ContentBlock.vue";
import Placeholder from "../helpers/Placeholder.vue";

export default {
  title: "Example/ContentBlock",
  component: ContentBlock,
  argTypes: {
    width: {
      defaultValue: "5xl",
      control: {
        type: "select",
        options: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
        ],
      },
    },
  },
};

const Template = (args) => ({
  components: { ContentBlock, Placeholder },
  setup() {
    return { args };
  },
  template: '<ContentBlock v-bind="args"><Placeholder /></ContentBlock>',
});

export const Component = Template.bind({});
