import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'air-button',
  styleUrl: 'air-button.css',
  shadow: true,
})
export class AirButton {
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() variant: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'ghost' = 'default';
  @Prop() color: string = 'blue'; // 默认值设置为 blue
  @Prop() icon: string = '';
  @Prop() suffixIcon: string = '';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;

  @State() hasSlotContent: boolean = false;

  private nativeElement!: HTMLButtonElement;

  private computeSlotHasContent() {
    const slot = this.nativeElement.shadowRoot?.querySelector('slot');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      this.hasSlotContent = assignedNodes.length > 0 || slot.textContent?.trim().length > 0;
    }
  }

  render() {
    const ariaLabel = this.hasSlotContent ? null : 'Button'; // 当插槽内容存在时，aria-label 设置为 null

    return (
      <Host>
        <button
          class={{
            'native-button': true,
            [`size-${this.size}`]: true,
            [`variant-${this.variant}`]: true,
            'loading': this.loading,
            'disabled': this.disabled,
          }}
          style={{ '--button-color': this.color }} // 动态传递 color 属性
          aria-busy={this.loading ? 'true' : null}
          aria-label={ariaLabel} // 如果插槽内容为空，则使用按钮的默认描述
          title={ariaLabel}
          ref={(elm: HTMLButtonElement) => (this.nativeElement = elm)}
          disabled={this.disabled} // 添加 disabled 属性
        >
          {this.loading ? (
            <span class="air-button__loading-icon">🔄</span>
          ) : (
            this.icon && <span class="air-button__icon">{this.icon}</span>
          )}
          <slot onSlotchange={() => this.computeSlotHasContent()} />
          {this.suffixIcon && !this.loading && <span class="air-button__suffix-icon">{this.suffixIcon}</span>}
        </button>
      </Host>
    );
  }

  componentDidLoad() {
    this.computeSlotHasContent();
    // 等待渲染完成，避免获取不到 shadowRoot 或 slot 内容
    setTimeout(() => this.computeSlotHasContent(), 0);
  }
}
