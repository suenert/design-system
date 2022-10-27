<template>
    <div :class="[widthClass, 'mx-auto']">
        <slot />
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        width: {
            type: String,
            default: '5xl',
        },
    },

    setup(props) {
        return {
            widthClass: computed(() => {
                return {
                    'max-w-xs': props.width === 'xs',
                    'max-w-sm': props.width === 'sm',
                    'max-w-md': props.width === 'md',
                    'max-w-lg': props.width === 'lg',
                    'max-w-xl': props.width === 'xl',
                    'max-w-2xl': props.width === '2xl',
                    'max-w-3xl': props.width === '3xl',
                    'max-w-4xl': props.width === '4xl',
                    'max-w-5xl': props.width === '5xl',
                    'max-w-6xl': props.width === '6xl',
                    'max-w-7xl': props.width === '7xl',
                };
            }),
        };
    },
};
</script>
