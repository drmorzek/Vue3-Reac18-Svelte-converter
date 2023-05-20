import React from 'react';

function SvelteToReact(Component) {
    return function (props) {
        var ref = React.useRef(null);
        React.useEffect(function () {
            var comp = new Component({
                target: ref.current,
                props: props,
            });
            return function () { return comp.$destroy(); };
        }, []);
        return React.createElement("div", { ref: ref });
    };
}

export { SvelteToReact };
