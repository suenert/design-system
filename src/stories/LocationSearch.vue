<script setup>
import { computed, ref } from "vue";
import { OnClickOutside } from "@vueuse/components";
import throttle from "lodash/throttle";

import Input from "./Input.vue";

const props = defineProps({
    getSuggestions: {
        type: Function,
        required: true,
    },
    label: String,
    description: String,
    placeholder: String,
    error: String,
    id: String,
    classNames: String,
});

const emit = defineEmits(["selected"]);

const focus = ref(false);

const showSuggestions = computed(() => {
    return focus.value && autoCompleteResults.value.length > 0;
});

const search = ref("");
const autoCompleteResults = ref([]);

const getSuggestions = throttle(async function (search) {
    autoCompleteResults.value = await props.getSuggestions(search);
}, 1000);

function select(place) {
    search.value = place.place_name;

    emit("selected", place);
}
</script>

<template>
  <div class="w-full relative">
    <OnClickOutside @trigger="focus = false">
      <Input
        type="text"
        v-model="search"
        @keyup="getSuggestions(search)"
        :label="label"
        :description="description"
        :placeholder="placeholder"
        :error="error"
        :id="id"
        :class="[
          {
            'rounded-b-none': showSuggestions,
          },
          classNames,
        ]"
        autocomplete="off"
        @focus="focus = true"
      />
    </OnClickOutside>
    <ul
      v-if="showSuggestions"
      class="
        absolute
        left-0
        w-full
        bg-white
        border border-t-0
        ring-grey-300
        border-grey-300
        z-10
        rounded-b-md
        shadow-xl
        px-4
        pb-4
      "
      style="margin-top: 1px"
    >
      <li
        v-for="suggestion in autoCompleteResults"
        :key="suggestion.id"
        class="
          -mx-4
          p-4
          text-gray-800
          hover:bg-indigo-500
          hover:text-white
          cursor-pointer
        "
        @click="select(suggestion)"
      >
        {{ suggestion.place_name }}
      </li>
    </ul>
  </div>
</template>
