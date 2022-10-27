import Select from "./Select.vue";
import { ref } from "vue";

export default {
  title: "Base/Select",
  component: Select,
  argTypes: {
    "onUpdate:modelValue": {},
    description: { defaultValue: "description", control: "text" },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Select },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const selected = ref("");
    return { args, selected };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <Select v-model="selected" v-bind="args">
            <option
                v-for="(option, i) in args.options"
                :key="i"
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </Select>
        <pre>v-model:{{ selected }}</pre>
    `,
});

export const ModelIsPrimitive = Template.bind({});
ModelIsPrimitive.args = {
  label: "Label",
  description: "Description",
  placeholder: "Anrede auswählen",
  options: [
    { value: "mr", text: "Herr" },
    { value: "mrs", text: "Frau" },
    { value: "mrmrs", text: "Herr und Frau" },
    { value: "company", text: "Firma" },
    { value: "none", text: "Ohne Anrede" },
  ],
};

export const ModelIsObject = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Select },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const selected = ref("");
    return { args, selected };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
        <Select v-model="selected" v-bind="args">
            <option
                v-for="(option, i) in args.options"
                :key="i"
                :value="option"
            >
                {{ option.text }}
            </option>
        </Select>
        <pre>v-model:{{ selected }}</pre>
    `,
});

ModelIsObject.args = {
  ...ModelIsPrimitive.args,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...ModelIsPrimitive.args,
  error: "Fehler - bitte wählen Sie eine Option",
};
