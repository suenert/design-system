<template>
  <div :class="classes">
    <WrapNode v-for="(node, i) in $slots.default()" :value="node" :key="i" />
  </div>
</template>

<script>
import WrapNode from "./WrapNode.vue";
import { useResponsiveVariants } from "./useResponsiveVariants";

export default {
  components: { WrapNode },
  props: {
    space: {
      type: [String, Array],
      required: true,
    },
  },

  setup(props) {
    let classes = "";

    if (Array.isArray(props.space)) {
      classes = useResponsiveVariants("space-y", props.space);
    } else {
      classes = `space-y-${props.space}`;
    }

    return {
      classes,
    };
  },
};
</script>
