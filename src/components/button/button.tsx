import {
  Component,
  h,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'air-button',
  styleUrl: 'button.css',
  shadow: false,
})
export class AirButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() state:
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'ghost'
    | 'outline'
    | 'solid' = 'primary';
  @Prop() icon: string = '';
  @Prop() suffixIcon: string = '';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false; // 加载状态
  @Prop() selected: boolean = false; // 选中状态

  @State() hasSlotContent: boolean = false; // 插槽内容检测

  @Event() buttonClick: EventEmitter<{ event: MouseEvent; selected: boolean }>; // 定义事件

  private nativeElement!: HTMLButtonElement;
  // 检查按钮插槽内容
  private computeSlotHasContent() {
    const slot = this.nativeElement.shadowRoot?.querySelector('slot');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      this.hasSlotContent =
        assignedNodes.length > 0 || slot.textContent?.trim().length > 0;
    }
  }
  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }

    // 触发外部注入的逻辑
    this.buttonClick.emit({ event, selected: this.selected });
  };

  render() {
    const ariaLabel = this.hasSlotContent ? null : 'Button'; // 适配无内容时的 aria-label

    return (
      <Host>
        <button
          class={{
            'native-button': true,
            [`size-${this.size}`]: true,
            [`state-${this.state}`]: true,
            loading: this.loading, // 加载状态样式
            disabled: this.disabled, // 禁用状态样式
            selected: this.selected, // 选中状态样式
          }}
          type={this.type} // 传递类型（submit、button、reset）
          aria-busy={this.loading ? 'true' : null}
          aria-label={ariaLabel}
          title={ariaLabel}
          ref={(elm: HTMLButtonElement) => (this.nativeElement = elm)}
          disabled={this.disabled} // 禁用按钮
          onClick={this.handleClick}
        >
          {this.loading && <span class="native-button__loading-icon" />}
          {!this.loading && this.icon && (
            <span class="native-button__icon">{this.icon}</span>
          )}
          <slot onSlotchange={() => this.computeSlotHasContent()} />
          {!this.loading && this.suffixIcon && (
            <span class="native-button__suffix-icon">{this.suffixIcon}</span>
          )}
        </button>
      </Host>
    );
  }
}
