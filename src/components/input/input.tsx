import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'air-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class AirInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() name: string;
  @Prop() disabled: boolean = false;
  @Prop() error: boolean = false;
  @Prop() errorMessage: string = '';
  @Prop() required: boolean = false;
  @Prop() pattern: string;
  @Prop() type: string = 'text';
  @Prop() maxLength: number;
  @Prop() minLength: number;
  @Prop() autofocus: boolean = false;
  @Prop() customClass: string = '';
  @Prop() customStyle: { [key: string]: string } = {};

  @State() inputValue: string;

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;

    if (this.pattern) {
      this.error = !new RegExp(this.pattern).test(input.value);
    } else {
      this.error = false;
    }
  }

  render() {
    return (
      <div class={`input-wrapper ${this.customClass}`}>
        {this.label && (
          <label htmlFor={this.name} class="input-label">
            {this.label} {this.required && <span class="required">*</span>}
          </label>
        )}

        <div class="input-container">
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
            } ${this.disabled ? 'input-disabled' : ''}`}
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

        {this.error && this.errorMessage && (
          <p id={`${this.name}-error`} class="input-error-message">
            {this.errorMessage}
          </p>
        )}
      </div>
    );
  }
}
