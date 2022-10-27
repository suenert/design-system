<template>
  <div :class="rootClasses">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <span v-if="description">
      {{ description }}
    </span>
    <div :class="[{ 'mt-1': label || description }, 'relative']">
      <input
        :id="id"
        ref="input"
        :type="type"
        v-bind="$attrs"
        class="shadow-sm block w-full sm:text-sm rounded-md"
        :class="classes"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      <div
        v-if="error"
        class="
          absolute
          inset-y-0
          right-0
          pr-3
          flex
          items-center
          pointer-events-none
        "
      >
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" />
      </div>
    </div>
    <ValidationError v-if="error" :error="error" class="mt-2" />
  </div>
</template>

<script>
import { reactive, computed, useAttrs } from "vue";
import { useUniqueId } from "./useUniqueId.js";
import ValidationError from "./ValidationError.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/24/solid";

export default {
  inheritAttrs: false,

  components: {
    ValidationError,
    ExclamationCircleIcon,
  },

  props: {
    rootClasses: String,
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: String,
    error: String,
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default() {
        return `input-${useUniqueId()}`;
      },
    },
    description: {
      type: String,
    },
  },

  emits: ["update:modelValue"],

  setup(props) {
    let attrs = useAttrs();

    props = reactive(props);

    return {
      classes: computed(() => ({
        "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":
          props.error,
        "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500":
          !props.error,
        "bg-gray-100 text-gray-600 focus:ring-transparent focus:border-gray-300 hover:cursor-not-allowed":
          attrs.hasOwnProperty("readonly"),
      })),
    };
  },
};
</script>
