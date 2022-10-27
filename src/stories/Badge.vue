<template>
  <div :class="{ 'min-w-0': truncate }">
    <span
      class="py-0.5 rounded-full font-medium"
      :class="[displayClasses, sizeClasses, colorClasses]"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    color: {
      type: String,
      required: true,
    },

    large: {
      type: Boolean,
      default: false,
    },

    truncate: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      sizeClasses: computed(() => ({
        "px-2.5 text-xs": props.large === false,
        "px-3 text-sm": props.large === true,
      })),

      colorClasses: computed(() => ({
        "bg-gray-100 text-gray-800": props.color === "gray",
        "bg-red-100 text-red-800": props.color === "red",
        "bg-yellow-100 text-yellow-800": props.color === "yellow",
        "bg-green-100 text-green-800": props.color === "green",
        "bg-blue-100 text-blue-800": props.color === "blue",
        "bg-indigo-100 text-indigo-800": props.color === "indigo",
        "bg-purple-100 text-purple-800": props.color === "purple",
        "bg-pink-100 text-pink-800": props.color === "pink",
      })),

      displayClasses: {
        "block truncate": props.truncate === true,
        "inline-flex items-center": props.truncate === false,
      },
    };
  },
};
</script>
