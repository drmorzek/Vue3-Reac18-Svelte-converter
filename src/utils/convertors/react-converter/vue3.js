import { h } from 'vue'
import React from 'react';
import { createRoot } from 'react-dom/client'

function ReactToVue(Component) {
    return {
        mounted: function () {
            this.comp = createRoot(this.$refs.target)
            this.comp.render(React.createElement(Component, {...this.$attrs}))
        },
        beforeDestroy: function () {
            if (this.comp) {
                this.comp.unmount();
            }
        },
        render() {
            return h('div', { ref: 'target' });
        },
    };
}

export { ReactToVue };
