import { Component, h, Host, Prop, State } from "@stencil/core";

@Component({
  tag: "air-button",
  styleUrl: "button.css",
  shadow: true,
})
export class AirButton {
  @Prop() size: "small" | "medium" | "large" = "medium";
  @Prop() variant:
    | "solid"
    | "outline"
    | "text"
    | "neo"
    | "default"="default";
  @Prop() color:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "ghost"="default";
  @Prop() icon: string = "";
  @Prop() suffixIcon: string = "";
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false; // 加载状态
  @Prop() selected: boolean = false; // 选中状态

  @State() hasSlotContent: boolean = false; // 插槽内容检测

  private nativeElement!: HTMLButtonElement;

  // 检查按钮插槽内容
  private computeSlotHasContent() {
    const slot = this.nativeElement.shadowRoot?.querySelector("slot");
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      this.hasSlotContent = assignedNodes.length > 0 || slot.textContent?.trim().length > 0;
    }
  }

  render() {
    const ariaLabel = this.hasSlotContent ? null : "Button"; // 适配无内容时的 aria-label

    return (
      <Host>
        <button
          class={{
            "native-button": true,
            [`size-${this.size}`]: true,
            [`variant-${this.variant}`]: !!this.variant,
            [`color-${this.color}`]: true,
            "loading": this.loading, // 加载状态样式
            "disabled": this.disabled, // 禁用状态样式
            "selected": this.selected, // 选中状态样式
          }}
          aria-busy={this.loading ? "true" : null}
          aria-label={ariaLabel}
          title={ariaLabel}
          ref={(elm: HTMLButtonElement) => (this.nativeElement = elm)}
          disabled={this.disabled} // 禁用按钮
        >
          {this.loading ? (
            <span class="native-button__loading-icon" /> // 加载时显示旋转图标
          ) : (
            this.icon && <span class="native-button__icon">{this.icon}</span> // 显示按钮图标
          )}
          <slot onSlotchange={() => this.computeSlotHasContent()} />
          {!this.loading && this.suffixIcon && <span class="native-button__suffix-icon">{this.suffixIcon}</span>}
        </button>
      </Host>
    );
  }
}
