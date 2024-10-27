import { Component, h } from '@stencil/core';

@Component({
  tag: 'air-button',
  styleUrl: 'air-button.css',
  shadow: true,
})
export class AirButton {
  render() {
    return (
      <button class="air-button">
        <slot></slot> {/* 允许用户插入内容 */}
      </button>
    );
  }
}
