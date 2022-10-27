<template>
  <div>
    <label v-if="label" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <span v-if="description">
      {{ description }}
    </span>
    <select
      v-model="model"
      id="id"
      name="name"
      class="
        block
        w-full
        pl-3
        pr-10
        py-2
        text-base
        border-gray-300
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        sm:text-sm
        rounded-md
      "
      :class="{ 'mt-1': label || description }"
    >
      <option v-if="placeholder" value="" disabled>
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">
      {{ error }}
    </p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    placeholder: String,
    options: Array,
    modelValue: {
      type: [String, Number, Object, Boolean],
      default: "",
    },
    label: String,
    error: String,
    description: {
      type: String,
      default: "",
    },
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
