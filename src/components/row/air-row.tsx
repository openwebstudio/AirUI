import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "air-row",
  styleUrl: "air-row.css",
  shadow: true,
})
export class AirRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
