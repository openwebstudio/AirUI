import { Component,h } from "@stencil/core";

@Component({
    tag: "air-spinner",
    styleUrl: "./spinner.css",
    shadow: true,
})

export class spinner{
    render(){
        return (
            <div class="loader"></div>
        )
    }
}