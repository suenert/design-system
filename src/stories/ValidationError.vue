<template>
    <p class="text-sm text-red-600">{{ error }}</p>
</template>

<script>
export default {
    props: {
        error: String,
    },
};
</script>
