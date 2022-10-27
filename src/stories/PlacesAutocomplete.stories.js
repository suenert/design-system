import PlacesAutocomplete from "./PlacesAutocomplete.vue";

export default {
  title: "Form/PlacesAutocomplete",
  component: PlacesAutocomplete,
  args: {
    placeholder: "Placeholder",
    modelValue: {},
  },
  argTypes: {
    "onUpdate:modelValue": {},
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: (args) => ({
    components: { PlacesAutocomplete },
    setup() {
      return { args };
    },
    template: `<PlacesAutocomplete v-bind="args" />`,
  }),
};
