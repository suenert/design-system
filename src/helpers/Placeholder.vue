<template>
    <div
        class="
            relative
            flex
            items-center
            justify-center
            bg-purple-100
            border border-purple-600
        "
        :style="{
            height: `${height}px`,
            width: $props.width ? `${width}px` : '100%',
        }"
    >
        <p class="text-purple-600" v-if="label">
            {{ label }}
        </p>
        <svg
            v-if="!label"
            xmlns="http://www.w3.org/2000/svg"
            class="
                absolute
                inset-0
                w-full
                h-full
                text-purple-600
                stroke-current
            "
        >
            <line class="_1rieg" x1="0" y1="0" x2="100%" y2="100%"></line>
            <line class="_1rieg" x1="100%" y1="0" x2="0" y2="100%"></line>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        height: {
            type: String,
            default: 80,
        },
        width: String,
    },
};
</script>
