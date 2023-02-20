import LocationSearch from "./LocationSearch.vue";

export default {
  title: "Form/LocationSearch",
  component: LocationSearch,
  args: {
    placeholder: "Wiesbaden Hbf",
    label: "Ortssuche",
    description: "",
    error: "",
    id: "location_search",
    classNames: "",
    getSuggestions: async function (search) {
      let mockResponse = {
        features: [
          {
            id: "address.3771029363421080",
            type: "Feature",
            place_type: ["address"],
            relevance: 1,
            properties: {
              accuracy: "street",
            },
            text_de: "Zwerchgraben",
            place_name_de: "Zwerchgraben, 97074 Würzburg, Deutschland",
            text: "Zwerchgraben",
            place_name: "Zwerchgraben, 97074 Würzburg, Deutschland",
            center: [9.9538231, 49.7872133],
            geometry: {
              type: "Point",
              coordinates: [9.9538231, 49.7872133],
            },
            context: [
              {
                id: "postcode.64187962",
                text_de: "97074",
                text: "97074",
              },
              {
                id: "locality.88541754",
                wikidata: "Q1451792",
                text_de: "Frauenland",
                language_de: "de",
                text: "Frauenland",
                language: "de",
              },
              {
                id: "place.88672314",
                wikidata: "Q2999",
                text_de: "Würzburg",
                language_de: "de",
                text: "Würzburg",
                language: "de",
              },
              {
                id: "region.123962",
                short_code: "DE-BY",
                wikidata: "Q980",
                text_de: "Bayern",
                language_de: "de",
                text: "Bayern",
                language: "de",
              },
              {
                id: "country.8762",
                short_code: "de",
                wikidata: "Q183",
                text_de: "Deutschland",
                language_de: "de",
                text: "Deutschland",
                language: "de",
              },
            ],
          },
        ],
      };

      return mockResponse.features;
    },
  },
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
