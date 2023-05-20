import { VueToReact } from "../utils/convertors"
import VueComponent from "../vue/HelloWorld.vue"
// const SvelteComponent = toReact(SvelteApp)
const VueHello = VueToReact(VueComponent)

export function App({ msg }) {
    return (
    <>
        <VueHello msg={"fasfseagaeg1111"} />
        <h1>Hello world from React!!!! {msg}</h1>
    </>
    )
}