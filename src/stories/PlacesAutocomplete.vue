<script setup>
import { ref } from "vue";
import throttle from "lodash-es/throttle";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/24/solid";

defineProps({
  modelValue: Object,
  placeholder: String,
});
let countries = [
  "de",
  "dk",
  "pl",
  "cz",
  "at",
  "li",
  "ch",
  "fr",
  "be",
  "lu",
  "nl",
];
let suggestions = ref([]);

let getSuggestions = throttle(async function (value) {
  const accessToken = import.meta.env.VITE_MAPBOX_API_KEY;
  const endpoint = [
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
    `?access_token=${accessToken}`,
    `&autocomplete=true`,
    `&language=de`,
    `&country=`,
    countries.join(","),
  ].join("");
  const promise = await fetch(endpoint);
  const data = await promise.json();

  suggestions.value = data.features;
}, 1000);
</script>

<template>
  <Combobox
    as="div"
    :modelValue="modelValue"
    @update:modelValue="(newValue) => $emit('update:modelValue', newValue)"
  >
    <div class="relative">
      <ComboboxInput
        class="
          w-full
          lg:w-72
          rounded-md
          border border-gray-300
          bg-white
          py-2
          pl-3
          pr-10
          shadow-sm
          focus:border-indigo-500
          focus:outline-none
          focus:ring-1 focus:ring-indigo-500
          sm:text-sm
        "
        @change="getSuggestions($event.target.value)"
        :displayValue="(suggestion) => suggestion?.place_name"
        :placeholder="placeholder"
        autocomplete="false"
      />

      <ComboboxButton
        v-if="suggestions.length > 0"
        class="
          absolute
          inset-y-0
          right-0
          flex
          items-center
          rounded-r-md
          px-2
          focus:outline-none
        "
      >
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions
        v-if="suggestions.length > 0"
        class="
          absolute
          z-10
          mt-1
          max-h-60
          w-full
          overflow-auto
          rounded-md
          bg-white
          py-1
          text-base
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          sm:text-sm
        "
      >
        <ComboboxOption
          v-for="suggestion in suggestions"
          :key="suggestion.id"
          :value="suggestion"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-8 pr-4',
              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
            ]"
          >
            <span :class="['block truncate', selected && 'font-semibold']">
              {{ suggestion.place_name }}
            </span>

            <span
              v-if="selected"
              :class="[
                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                active ? 'text-white' : 'text-indigo-600',
              ]"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
