<template>
    <p :class="[fontSizeClass, fontWeightClass, textAlignClass, truncateClass]">
        <slot />
    </p>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        size: {
            type: String,
            default: 'default',
        },
        weight: {
            type: String,
            default: 'default',
        },
        align: {
            type: String,
            default: 'default',
        },
        truncate: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {
        return {
            fontSizeClass: computed(() => {
                return {
                    'text-xs': props.size === 'xs',
                    'text-sm': props.size === 'sm',
                    'text-base': props.size === 'base',
                    'text-lg': props.size === 'lg',
                    'text-xl': props.size === 'xl',
                    'text-2xl': props.size === '2xl',
                    'text-3xl': props.size === '3xl',
                };
            }),

            fontWeightClass: computed(() => {
                return {
                    'font-normal': props.weight === 'normal',
                    'font-medium': props.weight === 'medium',
                    'font-bold': props.weight === 'bold',
                };
            }),

            textAlignClass: computed(() => {
                return {
                    'text-left': props.align === 'left',
                    'text-center': props.align === 'center',
                    'text-right': props.align === 'right',
                };
            }),

            truncateClass: computed(() => {
                return {
                    truncate: props.truncate === true,
                };
            }),
        };
    },
};
</script>
