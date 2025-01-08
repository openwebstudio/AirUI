// src/components/my-input/my-input.tsx
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'air-input',
  styleUrl: 'input.css',
  shadow: true,
})
export class MyInput {
  @Prop() label: string; // 标签
  @Prop() placeholder: string; // 占位符
  @Prop() value: string; // 值
  @Prop() name: string; // 名称
  @Prop() disabled: boolean = false; // 是否禁用
  @Prop() error: boolean = false; // 是否有错误
  @Prop() errorMessage: string = ''; // 错误信息
  @Prop() required: boolean = false; // 是否必填
  @Prop() pattern: string; // 正则表达式
  @Prop() type: string = 'text'; // 输入类型
  @Prop() maxLength: number; // 最大字符长度
  @Prop() minLength: number; // 最小字符长度
  @Prop() autofocus: boolean = false; // 是否自动聚焦
  @Prop() customClass: string = ''; // 自定义类名
  @Prop() customStyle: { [key: string]: string } = {};
  @State() inputValue: string; // 内部状态

  // 当输入框的值发生变化时
  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    this.error = this.pattern && !new RegExp(this.pattern).test(input.value);
  }

  render() {
    return (
      <div class={`input-wrapper ${this.customClass}`}>
        {/* 标签 */}
        {this.label && (
          <label htmlFor={this.name} class="input-label">
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
            class={`input-field ${this.error ? 'input-error' : 'input-normal'} ${
              this.disabled ? 'input-disabled' : ''
            }`}
            placeholder={this.placeholder}
            value={this.value || this.inputValue}
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
          <p id={`${this.name}-error`} class="input-error-message">
            {this.errorMessage}
          </p>
        )}
      </div>
    );
  }
}
