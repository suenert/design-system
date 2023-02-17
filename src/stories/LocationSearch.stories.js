import LocationSearch from "./LocationSearch.vue";

export default {
  title: "Form/LocationSearch",
  component: LocationSearch,
  args: {
    placeholder: "Wiesbaden Hbf",
    accessToken: import.meta.env.VITE_MAPBOX_API_KEY,
    label: 'Ortssuche',
    description: '',
    error: '',
    id: 'location_search',
    classNames: '',
  }
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: (args) => ({
    components: { LocationSearch },
    setup() {
      return { args };
    },
    template: `<LocationSearch v-bind="args" />`,
  }),
};
