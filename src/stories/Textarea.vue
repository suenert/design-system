<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <div>
    <label
      v-if="label"
      for="comment"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <div :class="{ 'mt-1': label }">
      <textarea
        rows="4"
        name="comment"
        id="comment"
        class="
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-500
          focus:ring-indigo-500
          sm:text-sm
        "
      />
    </div>
  </div>
</template>
