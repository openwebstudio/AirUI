// src/components/my-input/my-input.tsx
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'air-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class AirInput {
  @Prop() label: string; // 标签
  @Prop() placeholder: string; // 占位符
  @Prop() value: string; // 输入框的值
  @Prop() name: string; // 输入框的名称
  @Prop() disabled: boolean = false; // 是否禁用
  @Prop() error: boolean = false; // 是否有错误
  @Prop() errorMessage: string = ''; // 错误信息
  @Prop() required: boolean = false; // 是否必填
  @Prop() pattern: string; // 正则表达式，校验输入的值
  @Prop() type: string = 'text'; // 输入框类型，默认为文本框
  @Prop() maxLength: number; // 最大字符长度
  @Prop() minLength: number; // 最小字符长度
  @Prop() autofocus: boolean = false; // 是否自动聚焦
  @Prop() customClass: string = ''; // 自定义类名
  @Prop() customStyle: { [key: string]: string } = {}; // 自定义样式

  @State() inputValue: string; // 内部状态，保存输入框的值

  // 当输入框的值发生变化时
  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;

    // 校验是否符合 pattern
    if (this.pattern) {
      this.error = !new RegExp(this.pattern).test(input.value);
    } else {
      this.error = false;
    }
  }

  render() {
    return (
      <div
        class={`input-wrapper ${this.customClass} air-spacing-small air-rounded-medium`}
      >
        {/* 标签 */}
        {this.label && (
          <label
            htmlFor={this.name}
            class={`input-label air-text-base air-font-medium air-color-primary`}
          >
            {this.label} {this.required && <span class="required">*</span>}
          </label>
        )}

        {/* 输入框 */}
        <div class="input-field-wrapper">
          <slot name="prefix"></slot>
          <input
            id={this.name}
            name={this.name}
            type={this.type}
            maxLength={this.maxLength}
            minLength={this.minLength}
            required={this.required}
            autofocus={this.autofocus ? 'autofocus' : undefined}
            class={`input-field ${
              this.error ? 'input-error' : 'input-normal'
            } ${
              this.disabled ? 'input-disabled' : ''
            } air-bg-light air-border air-rounded-medium air-text-base`}
            placeholder={this.placeholder}
            value={this.value || this.inputValue} // 使用 prop 或 state 值
            disabled={this.disabled}
            onInput={(event) => this.handleInputChange(event)}
            style={this.customStyle}
            aria-label={this.label}
            aria-invalid={this.error ? 'true' : 'false'}
            aria-describedby={`${this.name}-error`}
          />
          <slot name="suffix"></slot>
        </div>

        {/* 错误信息 */}
        {this.error && this.errorMessage && (
          <p
            id={`${this.name}-error`}
            class="input-error-message air-text-small air-font-light air-color-primary"
          >
            {this.errorMessage}
          </p>
        )}
      </div>
    );
  }
}
