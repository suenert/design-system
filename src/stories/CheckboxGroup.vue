<template>
  <fieldset>
    <legend class="text-base font-medium text-gray-900">
      {{ groupLabel }}
    </legend>
    <div class="mt-4 space-y-4">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="relative flex items-start"
      >
        <div class="flex items-center h-5">
          <input
            :id="`${id}-${index}`"
            :value="option.value"
            type="checkbox"
            v-model="model"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
              rounded
            "
          />
        </div>
        <div class="ml-3 text-sm">
          <label :for="`${id}-${index}`" class="font-medium text-gray-700">
            <slot name="label" :label="option.label">
              {{ option.label }}
            </slot>
          </label>
          <p
            v-if="option.description"
            :id="`${option.value}-description`"
            class="text-gray-500"
          >
            <slot name="description" :description="option.description">
              {{ option.description }}
            </slot>
          </p>
        </div>
      </div>
    </div>
  </fieldset>
  <ValidationError v-if="error" :error="error" class="mt-2" />
</template>

<script>
import { computed } from "vue";
import { useUniqueId } from "./useUniqueId.js";
import ValidationError from "./ValidationError.vue";

export default {
  props: {
    index: Number,
    error: String,
    inputValue: String,
    modelValue: Array,
    label: String,
    options: Array,
    groupLabel: String,
    id: {
      type: String,
      default() {
        return `input-${useUniqueId()}`;
      },
    },
  },

  components: {
    ValidationError,
  },

  setup(props, { emit }) {
    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      },
    });

    return { model };
  },

  emits: ["update:modelValue"],
};
</script>
