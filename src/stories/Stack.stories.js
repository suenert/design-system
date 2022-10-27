import Stack from "./Stack.vue";
import Heading from "./Heading.vue";
import Text from "./Text.vue";
import Button from "./Button.vue";

export default {
  title: "Example/Stack",
  component: Stack,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
  argTypes: {
    // space: {
    //     control: {
    //         type: "select",
    //         options: [1, 2, 3, 4, 5, 6, 7],
    //     },
    // },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Stack, Button, Heading, Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <div>
            <Stack v-bind="args">
                <Heading level="1">Heading</Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada,
                massa nec ultricies efficitur, lectus ante consequat magna, a porttitor
                massa ex ut quam.
                </Text>
                <Text>
                Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus.
                Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien
                finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Text>
            </Stack>
        </div>
    `,
});

export const Component = Template.bind({});
Component.args = {
  space: [3, 6, 9],
};

export const Second = Template.bind({});
Second.args = {
  space: 6,
};
