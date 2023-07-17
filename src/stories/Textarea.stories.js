import Textarea from "./Textarea.vue";

export default {
  title: "Base/Textarea",
  component: Textarea,
  argTypes: {
    label: { defaultValue: "Label", control: "text" },
    modelValue: {
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod vitae culpa consectetur, asperiores neque odit repudiandae deleniti fugiat tempore tempora eius dolores amet nisi aperiam quidem quam quasi quae!",
      control: "text",
    },
  },
};

const Template = (args) => ({
  components: { Textarea },
  setup() {
    return { args };
  },
  template:
    '<Textarea v-model="args.modelValue" :label="args.label" :error="args.error" />',
});

export const Component = Template.bind({});
Component.args = {
  label: "Label",
  error: "error message",
};

export const RootClasses = (args) => ({
  components: { Textarea },
  setup() {
    return { args };
  },
  template: `
    <Textarea v-model="args.modelValue" 
        :label="args.label" 
        :rows="args.rows" 
        class="text-green-500" 
        rootClasses="w-1/2" 
    />
    `,
});
RootClasses.args = {
  label: "Label",
  rows: "5",
};
