import CheckboxGroup from "./CheckboxGroup.vue";
import { ref } from "vue";

export default {
  title: "Base/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    "onUpdate:modelValue": {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CheckboxGroup },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const checked = ref(["one", "two"]);
    return { args, checked };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <CheckboxGroup 
            v-model="checked" 
            :options="args.options" 
            group-label="By Email"
            :error="args.error"
        />
        <pre class="mt-8">v-model:{{ checked }}</pre>
    `,
});

export const Component = Template.bind({});
Component.args = {
  // label: 'Label',
  // placeholder: 'Anrede auswählen',
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
