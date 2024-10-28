import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'air-button',
  styleUrl: './air-button.css',
  shadow: true,
})
export class AirButton {
  @Element() el: HTMLElement;

  // 定义属性
  @Prop() content: string = '';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() icon: string = '';
  @Prop() suffixIcon: string = '';

  render() {
    return (
      <Host>
        <button
          class={{
            'air-button': true,
            'is-disabled': this.disabled,
            'is-loading': this.loading,
          }}
          disabled={this.disabled}
          aria-busy={this.loading ? 'true' : null}
        >
          {/* 图标或加载动画 */}
          {this.loading ? (
            <span class="air-button__loading-icon">🔄</span>
          ) : (
            this.icon && <span class="air-button__icon">{this.icon}</span>
          )}

          {/* 显示 content 内容 */}
          <span class="air-button__text">{this.content}</span>

          {/* 后缀图标 */}
          {this.suffixIcon && <span class="air-button__suffix-icon">{this.suffixIcon}</span>}
        </button>
      </Host>
    );
  }
}
