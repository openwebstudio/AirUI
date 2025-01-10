import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'air-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class AirCard {
  @Prop() cardTitle: string = 'Card Title';
  @Prop() content: string = 'This is the card content.';
  @Prop() imageUrl: string = '';
  @Prop() isHighlighted: boolean = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  @Event() cardClicked: EventEmitter<void>;

  private handleClick() {
    this.cardClicked.emit();
  }

  render() {
    return (
      <div
        class={`card ${this.isHighlighted ? 'highlighted' : ''} ${this.size}`}
        onClick={() => this.handleClick()}
      >
        {this.imageUrl && (
          <img src={this.imageUrl} alt="Card image" class="card-image" />
        )}

        <div class="card-body">
          <h2 class="card-title">
            <slot name="title">{this.cardTitle}</slot>
          </h2>
          <p class="card-content">
            <slot name="content">{this.content}</slot>
          </p>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot> {/* 底部插槽，适合放置按钮 */}
        </div>
      </div>
    );
  }
}
