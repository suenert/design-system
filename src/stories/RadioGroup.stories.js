import RadioGroup from "./RadioGroup.vue";
import { ref } from "vue";

export default {
  title: "Base/RadioGroup",
  component: RadioGroup,
  argTypes: {
    "onUpdate:modelValue": {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { RadioGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const checked = ref("one");
    return { args, checked };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <RadioGroup 
            v-model="checked" 
            v-bind="args"
        />
        <pre class="mt-8">v-model:{{ checked }}</pre>
    `,
});

export const Component = Template.bind({});
Component.args = {
  groupLabel: "Group Label",
  groupDescription: "Group Description",
  name: "name",
  options: [
    {
      value: "one",
      label: "First Option",
      description: "first description",
    },
    {
      value: "two",
      label: "Second Option",
    },
    {
      value: "three",
      label: "Third Option",
      description: "third description",
    },
  ],
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Component.args,
  error: "This is an error message",
};
