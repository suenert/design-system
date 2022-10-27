<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <slot />
    <div class="pt-5">
      <div class="flex justify-end space-x-4">
        <slot name="actions" />
      </div>
    </div>
  </form>
</template>
