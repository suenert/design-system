<script>
import { h, mergeProps } from "vue";
const size = (size) => {
  return {
    xs: { class: "px-2.5 py-1.5 text-xs rounded" },
    sm: { class: "px-3 py-2 text-sm leading-4 rounded-md" },
    md: { class: "px-4 py-2 text-sm rounded-md" },
    lg: { class: "px-4 py-2 text-base rounded-md" },
    xl: { class: "px-6 py-3 text-base rounded-md" },
  }[size];
};
const kind = (kind) => {
  return {
    primary: {
      class:
        "border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
    },
    secondary: {
      class:
        "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    },
    ghost: {
      class:
        "border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50",
    },
  }[kind];
};

const baseClasses = {
  class:
    "inline-flex items-center  border font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
};
export default {
  props: {
    as: {
      type: [String, Object],
      default: "button",
    },
    linkAs: {
      type: [String, Object],
      default: "button",
    },
    kind: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          ["primary", "secondary", "ghost", "critical"].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: "button",
    },
  },

  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    const disabledClasses = attrs.disabled ? { class: "opacity-50" } : {};
    return () =>
      h(
        props.as,
        {
          ...(props.linkAs ? { as: props.linkAs } : {}),
          ...attrs,
          ...mergeProps(
            baseClasses,
            size(props.size),
            kind(props.kind),
            disabledClasses
          ),
          onClick: () => {
            emit("click");
          },
        },
        slots
      );
  },
};
</script>
