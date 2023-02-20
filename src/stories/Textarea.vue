<script setup>
import { computed } from "vue";
import { useUniqueId } from "./useUniqueId.js";
import ValidationError from "./ValidationError.vue";

const props = defineProps({
  label: String,
  error: String,
  modelValue: String,
  id: {
    type: String,
    default() {
      return `input-${useUniqueId()}`;
    },
  },
});

defineEmits(["update:modelValue"]);

const classes = computed(() => ({
  "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":
    props.error,
  "border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500":
    !props.error,
}));
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div :class="{ 'mt-1': label }">
      <textarea
        rows="4"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md shadow-sm sm:text-sm"
        :class="classes"
      />
    </div>
    <ValidationError v-if="error" :error="error" class="mt-2" />
  </div>
</template>
