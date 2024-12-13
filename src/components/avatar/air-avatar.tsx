import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'air-avatar',
  styleUrl: 'air-avatar.css',
  shadow: true,
})
export class UiAvatar {
  @Prop() name: string = '';
  @Prop() rounded: boolean = true;
  @Prop() size: string = 'w-16 h-16'; // 默认大小
  @Prop() bgColor: string = 'bg-gray-300'; // 默认背景色

  // 获取首字母
  get initials(): string {
    const nameParts = this.name.split(' ');
    return nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  // 头像 URL
  get avatarUrl(): string {
    let url = 'https://ui-avatars.com/api/?';
    url += `name=${encodeURIComponent(this.name)}`;
    url += this.rounded ? '&rounded=true' : '';
    return url;
  }

  render() {
    const roundedClass = this.rounded ? 'rounded-full' : 'rounded-none'; // 根据 rounded 属性来设置圆角
    return (
      <div
        class={`inline-block ${this.size} ${this.bgColor} flex items-center justify-center ${roundedClass} overflow-hidden shadow-lg transition-all hover:shadow-2xl`}
      >
        <img
          src={this.avatarUrl}
          alt={this.name}
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    );
  }
}
