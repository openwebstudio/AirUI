import { Component, Prop, h } from '@stencil/core';

// 图标库类型
export type IconSet =
  | 'material-icons'
  | 'fas'
  | 'bx'
  | 'bxs'
  | 'iconfont' // 阿里巴巴图标库
  | 'iconpark'; // 腾讯图标库

@Component({
  tag: 'air-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class airIcon {
  @Prop() name: string;
  @Prop() color: string = 'currentColor';
  @Prop() size: string = '1.5em';
  @Prop() iconSet: IconSet = 'material-icons';

  render() {
    let iconClass = '';

    // Material Icons 处理
    if (this.iconSet === 'material-icons') {
      iconClass = `material-icons air-icon`;
    }
    // FontAwesome 处理
    else if (this.iconSet === 'fas') {
      iconClass = `fa-${this.name} ${this.iconSet} air-icon`;
    }
    // Boxicons 处理
    else if (this.iconSet === 'bx') {
      iconClass = `bx-${this.name} ${this.iconSet} air-icon`;
    }
    // Boxicons (Solid) 处理
    else if (this.iconSet === 'bxs') {
      iconClass = `bxs-${this.name} ${this.iconSet} air-icon`;
    }
    // Iconfont (阿里巴巴图标库) 处理
    else if (this.iconSet === 'iconfont') {
      iconClass = `iconfont icon-${this.name} air-icon`;
    }
    // IconPark (腾讯图标库) 处理
    else if (this.iconSet === 'iconpark') {
      iconClass = `iconpark-${this.name} air-icon`;
    }

    return (
      <span
        class={iconClass}
        style={{
          fontSize: this.size,
          color: this.color,
        }}
        aria-hidden="true">
        {this.name}
      </span>
    );
  }
}
