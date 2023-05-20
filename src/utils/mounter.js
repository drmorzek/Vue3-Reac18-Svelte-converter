import { createApp } from "vue";
import React from 'react';
import { createRoot } from 'react-dom/client'

export default ({selector, type, component}) =>{
    
    const htmlElem = document.querySelector(selector)

    switch (type) {
        case "vue":
            createApp(component).mount(htmlElem)
            break;

        case "react":
            createRoot(htmlElem).render(React.createElement(component, null))
            break;

        case "svelte":
            new component({target: htmlElem})
            break;
    
        default:
            break;
    }
}