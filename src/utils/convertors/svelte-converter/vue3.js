import { h } from 'vue'

function SvelteToVue(Component) {
    return {
        mounted: function () {
            this.comp = new Component({
                target: this.$refs.target,
                props: this.$attrs,
            });
        },
        beforeDestroy: function () {
            if (this.comp) {
                this.comp.$destroy();
            }
        },
        render() {
            return h('div', { ref: 'target' });
        },
    };
}

export { SvelteToVue };
