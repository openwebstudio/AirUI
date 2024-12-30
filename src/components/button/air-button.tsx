import { Component, h, Host, Prop, State } from "@stencil/core";

@Component({
  tag: "air-button",
  styleUrl: "air-button.css",
  shadow: true,
})
export class AirButton {
  @Prop() size: "small" | "medium" | "large" = "medium";
  @Prop() variant:
    | "solid"
    | "outline"
    | "text"
    | "outline"
    | "neo"
    | "default" = "solid";
  @Prop() color:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "ghost" = "default";
  @Prop() icon: string = "";
  @Prop() suffixIcon: string = "";
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false; // 显示加载状态
  @Prop() selected: boolean = false; // 选中状态

  @State() hasSlotContent: boolean = false; // 用来检查按钮插槽内容是否为空

  private nativeElement!: HTMLButtonElement;

  // 检查插槽内容
  private computeSlotHasContent() {
    const slot = this.nativeElement.shadowRoot?.querySelector("slot");
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      this.hasSlotContent =
        assignedNodes.length > 0 || slot.textContent?.trim().length > 0;
    }
  }

  render() {
    const ariaLabel = this.hasSlotContent ? null : "Button"; // 当插槽内容存在时，aria-label 设置为 null

    return (
      <Host>
        <button
          class={{
            "native-button": true,
            [`size-${this.size}`]: true,
            [`variant-${this.variant}`]: true,
            [`color-${this.color}`]: true,
            "loading": this.loading, // 添加加载状态样式
            "disabled": this.disabled, // 添加禁用状态样式
            "selected": this.selected, // 添加选中状态样式
          }}
          aria-busy={this.loading ? "true" : null} // 如果是加载状态，设置 aria-busy
          aria-label={ariaLabel} // 如果插槽内容为空，则使用按钮的默认描述
          title={ariaLabel}
          ref={(elm: HTMLButtonElement) => (this.nativeElement = elm)}
          disabled={this.disabled} // 添加 disabled 属性
        >
          {this.loading ? (
            <span class="air-button__loading-icon">🔄</span> // 如果处于加载状态，显示加载图标
          ) : (
            this.icon && <span class="air-button__icon">{this.icon}</span> // 否则显示按钮图标
          )}
          <slot onSlotchange={() => this.computeSlotHasContent()} />
          {this.suffixIcon && !this.loading && (
            <span class="air-button__suffix-icon">{this.suffixIcon}</span> // 如果有后缀图标并且没有加载状态，则显示后缀图标
          )}
        </button>
      </Host>
    );
  }

  // 组件加载完成后计算插槽内容
  componentDidLoad() {
    this.computeSlotHasContent();
    // 等待渲染完成，避免获取不到 shadowRoot 或 slot 内容
    setTimeout(() => this.computeSlotHasContent(), 0);
  }
}
