import Input from "./Input.vue";
import { ref } from "vue";

export default {
  title: "Base/Input",
  component: Input,
  argTypes: {
    placeholder: { defaultValue: "placeholder", control: "text" },
    description: { defaultValue: "description", control: "text" },
    "onUpdate:modelValue": {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const myInput = ref("");
    return { args, myInput };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <Input v-model="myInput" v-bind="args" />
        <pre>v-model:{{ myInput }}</pre>
    `,
});

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: "Label",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...InputWithLabel.args,
  error: "This is an error message",
};
