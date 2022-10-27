<template>
    <component :class="sizeClasses" :is="tagName" v-bind="$attrs">
        <slot />
    </component>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        level: String,
        renderAs: String,
    },

    setup(props) {
        return {
            sizeClasses: computed(() => ({
                'text-4xl': props.level === '1',
                'text-3xl': props.level === '2',
                'text-2xl': props.level === '3',
            })),
            tagName: computed(() => {
                if (!props.renderAs) return `h${props.level}`;
                return `${props.renderAs}`;
            }),
        };
    },
};
</script>
