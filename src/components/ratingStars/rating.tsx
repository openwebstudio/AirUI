import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';

type IconSet =
  | 'material-icons'
  | 'fas'
  | 'bx'
  | 'bxs'
  | 'iconfont'
  | 'iconpark';

@Component({
  tag: 'air-rating',
  styleUrl: 'rating.css',
  shadow: true,
})
export class AirRating {
  /**
   * 当前评分等级 (0~max)
   */
  @Prop({ mutable: true }) level: number = 0;

  /**
   * 最大星数（1-10）
   */
  @Prop() max: number = 5;

  /**
   * 选中图标（直接使用air-icon的name）
   */
  @Prop() filledIcon: string = 'star';

  /**
   * 未选中图标
   */
  @Prop() emptyIcon: string = 'star-outline';
  @Prop() iconSet: IconSet = 'material-icons';
  /**
   * 自定义样式（CSS键值对对象）
   */
  @Prop() customStyle: { [key: string]: string } = {};

  /**
   * 评分变化事件
   */
  @Event() ratingChange: EventEmitter<number>;

  // 点击处理
  private handleClick(index: number) {
    this.level = index + 1;
    this.ratingChange.emit(this.level);
  }

  // rating.tsx
  render() {
    return (
      <Host style={this.customStyle}>
        <div class="rating-container">
          {Array.from({ length: this.max }, (_, index) => (
            <button class="rating-star" onClick={() => this.handleClick(index)}>
              <air-icon
                iconSet={this.iconSet}
                name={index < this.level ? this.filledIcon : this.emptyIcon}
                color={index < this.level ? '#ffd700' : '#cccccc'}
                size="24px"
              />
            </button>
          ))}
        </div>
      </Host>
    );
  }
}
