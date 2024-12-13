import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "air-link-button",
  styleUrl: "air-link-button.css",
  shadow: true,
})
export class AirLinkButton {
  @Prop() href: string;
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() textColor: string = "text-black";

  render() {
    return (
      <a
        href={this.href}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 p-2 text-lg bg-transparent hover:bg-neutral-50 hover:bg-opacity-10 rounded transition duration-200"
      >
        <img src={this.icon} alt={this.label} class="w-5 h-5" />
        <span class={this.textColor}>{this.label}</span> {/* 动态设置文本颜色 */}
      </a>
    );
  }
}
