<template>
  <div>
    <div>
      <Heading level="3" class="font-medium leading-6 text-gray-900">
        {{ title }}
      </Heading>
      <Text size="sm" class="mt-1 text-gray-500">
        {{ description }}
      </Text>
    </div>
    <slot />
  </div>
</template>
<script setup>
import Heading from "./Heading.vue";
import Text from "./Text.vue";

defineProps({
  title: String,
  description: String,
});
</script>
