import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'air-button',
  styleUrl: 'air-button.css',
  shadow: true,
})
export class AirButton {
  @Element() el: HTMLElement;

  // 定义按钮属性
  @Prop() content: string = '';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() icon: string = '';
  @Prop() suffixIcon: string = '';
  @Prop() type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | '' = ''; // 按钮类型
  @Prop() plain: boolean = false; // 朴素按钮
  @Prop() ghost: boolean = false; // 幽灵按钮
  @Prop() round: boolean = false; // 圆角按钮
  @Prop() circle: boolean = false; // 圆形按钮
  @Prop() autoWidth: boolean = false; // 自适应宽度
  @Prop() size: 'big' | 'small' | 'medium' = 'medium'; // 按钮大小

  // 生成按钮的类名
  getButtonClass() {
    const defaultType = this.type || 'primary'; // 默认使用 primary 类型
    return {
      'font-medium transition-all duration-200': true,
      // 按钮类型
      'bg-blue-600 hover:bg-blue-700': defaultType === 'primary' && !this.disabled && !this.loading,
      'bg-green-600 hover:bg-green-700': defaultType === 'success' && !this.disabled && !this.loading,
      'bg-gray-600 hover:bg-gray-700': defaultType === 'info' && !this.disabled && !this.loading,
      'bg-yellow-600 hover:bg-yellow-700': defaultType === 'warning' && !this.disabled && !this.loading,
      'bg-red-600 hover:bg-red-700': defaultType === 'danger' && !this.disabled && !this.loading,
      'bg-transparent border border-current text-gray-800': this.plain && !this.disabled && !this.loading,
      'bg-transparent text-gray-800': this.ghost && !this.disabled && !this.loading,
      'rounded-full': this.circle, // 圆形按钮
      'rounded-lg': this.round,  // 圆角按钮
      'text-white': !this.ghost && !this.plain && !this.disabled && !this.loading, // 默认文字颜色
      'cursor-not-allowed opacity-60': this.disabled, // 禁用按钮样式
      'flex items-center justify-center': true, // Center content and icon
  
      // 固定按钮尺寸
      'py-2 px-4 w-[150px] h-[40px] text-sm': this.size === 'small',  // 小尺寸
      'py-3 px-6 w-[200px] h-[50px] text-base': this.size === 'medium', // 中等尺寸
      'py-4 px-8 w-[250px] h-[60px] text-lg': this.size === 'big',    // 大尺寸
  
      // 宽度和高度
      'w-full': this.autoWidth,  // 宽度自适应父容器
      'w-auto': !this.autoWidth, // 宽度自动根据内容
      'h-auto': true,  // 高度自适应
      'min-w-[120px]': true, // 设置最小宽度
      'max-w-full': true, // 防止按钮过大
  
      // 按钮交互效果
      'shadow-md hover:shadow-lg': true, // 增加阴影效果
      'hover:scale-105 transform': true, // 按钮悬停时增加缩放效果
      'active:scale-95': true, // 按钮按下时缩小
      'disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white': this.disabled, // 禁用状态
    };
  }
  
  render() {
    return (
      <Host>
        <button
          class={this.getButtonClass()}
          disabled={this.disabled || this.loading}
          aria-busy={this.loading ? 'true' : null}
        >
          {/* 图标或加载动画 */}
          {this.loading ? (
            <span class="air-button__loading-icon animate-spin mr-2">🔄</span>
          ) : (
            this.icon && <span class="air-button__icon mr-2">{this.icon}</span>
          )}

          {/* 显示 content 内容 */}
          <span class="air-button__text">{this.content}</span>

          {/* 后缀图标 */}
          {this.suffixIcon && !this.loading && (
            <span class="air-button__suffix-icon ml-2">{this.suffixIcon}</span>
          )}
        </button>
      </Host>
    );
  }
}
