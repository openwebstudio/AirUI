// air-tag.tsx
import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'air-tag',
  styleUrl: 'tag.css',
  shadow: true,
})
export class AirTag {
  @Prop() size: 'sm' | 'md' = 'md';
  @Prop() color: 'gray' | 'blue' | 'green' | 'yellow' | 'red' = 'gray';
  @Prop() closable: boolean = false;
  @Prop() rounded: 'none' | 'md' | 'full' = 'md';

  @Event() airClose: EventEmitter<void>;

  private getClass() {
    return {
      'inline-flex items-center gap-1.5 transition-colors': true,
      'text-xs px-2 py-1': this.size === 'sm',
      'text-sm px-2.5 py-1.5': this.size === 'md',
      'rounded-none': this.rounded === 'none',
      rounded: this.rounded === 'md',
      'rounded-full': this.rounded === 'full',
      'bg-gray-100 text-gray-600': this.color === 'gray',
      'bg-blue-100 text-blue-600': this.color === 'blue',
      'bg-green-100 text-green-600': this.color === 'green',
      'bg-yellow-100 text-yellow-600': this.color === 'yellow',
      'bg-red-100 text-red-600': this.color === 'red',
    };
  }

  private handleClose(e: MouseEvent) {
    e.stopPropagation();
    this.airClose.emit();
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot />

        {this.closable && (
          <button
            class={{
              'ml-1 -mr-0.5 p-0.5 hover:bg-black/5 transition-colors': true,
              'text-gray-400 hover:text-gray-600': this.color === 'gray',
              'text-blue-400 hover:text-blue-600': this.color === 'blue',
              'text-green-400 hover:text-green-600': this.color === 'green',
              'text-yellow-400 hover:text-yellow-600': this.color === 'yellow',
              'text-red-400 hover:text-red-600': this.color === 'red',
            }}
            onClick={(e) => this.handleClose(e)}
            aria-label="Close"
            part="close-button"
          >
            <air-icon
              name="x"
              size={this.size === 'sm' ? '2xs' : 'xs'} // 尺寸回退逻辑
              class="align-middle"
            />
          </button>
        )}
      </div>
    );
  }
}
