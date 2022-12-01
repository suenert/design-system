import PreviewRscInsuranceCheck from "./PreviewRscInsuranceCheck.vue";

export default {
  title: "Previews/PreviewRscInsuranceCheck",
  component: PreviewRscInsuranceCheck,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PreviewRscInsuranceCheck },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: "<PreviewRscInsuranceCheck />",
});

export const Component = Template.bind({});
