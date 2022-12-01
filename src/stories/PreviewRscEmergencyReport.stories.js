import PreviewRscEmergencyReport from "./PreviewRscEmergencyReport.vue";

export default {
  title: "Previews/PreviewRscEmergencyReport",
  component: PreviewRscEmergencyReport,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PreviewRscEmergencyReport },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: "<PreviewRscEmergencyReport />",
});

export const Component = Template.bind({});
