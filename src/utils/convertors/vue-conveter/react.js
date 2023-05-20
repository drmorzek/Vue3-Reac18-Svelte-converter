import React from 'react';
import { createApp } from "vue";

function VueToReact(Component) {
    return function (props) {
        const ref = React.useRef(null);
        React.useEffect(function () {
            let comp = createApp(
                Component, { ...props }
            )
            comp.mount(ref.current)
            return function () { return comp.unmount(); };
        }, []);
        return React.createElement("div", { ref: ref });
    };
}

export { VueToReact };
