import { component$ } from "@builder.io/qwik";
import About from "~/components/router-head/ai/About";
import Features from "~/components/router-head/ai/Features";
import Project from "~/components/router-head/technalogy/Project";

export default component$(() => {
    return(
        <div>
            <Features/>
            
            <About/>

            <Project/>
        </div>
    )
})