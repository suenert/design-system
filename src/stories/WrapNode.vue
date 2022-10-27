<script>
import { h } from 'vue';

export default {
    props: {
        value: {
            type: [Object, Array],
            required: true,
        },
        tag: {
            type: String,
            default: 'div',
        },
        options: {
            type: Object,
            default: () => {},
        },
    },

    setup(props) {
        let nodes = props.value;

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        return () => {
            return h(props.tag, props.options, nodes);
        };
    },
};
</script>
