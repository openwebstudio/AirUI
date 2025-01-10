import { Component, Prop, h, Host } from '@stencil/core';

/**
 * @name AirAvatar
 * @description 显示用户头像，支持头像图片、姓名首字母或默认样式，支持圆形和方形。
 * @category Data Display
 * @example <air-avatar size="medium" name="张三" src="/path/to/avatar.jpg" shape="circle" class="air-bg-primary"></air-avatar>
 */
@Component({
  tag: 'air-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class AirAvatar {
  /**
   * 头像尺寸，支持 `small`、`medium`、`large` 或自定义值（例如：`5rem`）。
   */
  @Prop() size: 'small' | 'medium' | 'large' | string = 'medium';

  /**
   * 用户姓名，用于生成首字母缩写。
   */
  @Prop() name: string = '';

  /**
   * 用户头像图片的 URL 地址。
   */
  @Prop() src: string = '';

  /**
   * 头像形状，支持 'circle' 或 'square'。
   */
  @Prop() shape: 'circle' | 'square' = 'circle';

  /**
   * 边框样式，可自定义。
   */
  @Prop() border: string = '';

  /**
   * 获取姓名首字母缩写。
   * 如果姓名不规范（如只有一个名字），会返回第一个字母。
   */
  private getInitials(): string {
    const nameParts = this.name.split(' ');
    const firstName = nameParts[0]?.charAt(0).toUpperCase() || '';
    const lastName = nameParts[1]?.charAt(0).toUpperCase() || '';
    return `${firstName}${lastName}` || '?'; // 如果无法获取首字母，默认显示问号
  }

  /**
   * 根据 `size` 属性返回相应的 Tailwind 类名。
   */
  private getSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'air-avatar-size-small';
      case 'medium':
        return 'air-avatar-size-medium';
      case 'large':
        return 'air-avatar-size-large';
      default:
        return ''; // 如果是自定义尺寸，使用内联样式
    }
  }

  render() {
    const containerClasses = [
      'air-avatar-container',
      this.getSizeClass(),
      this.shape === 'circle' ? 'air-rounded-full' : 'air-rounded-none',
      this.src
        ? ''
        : 'air-bg-neutral air-text-center air-font-bold air-items-center air-text-large',
    ].join(' ');

    return (
      <Host>
        <div
          class={containerClasses}
          style={{
            width:
              this.size && !['small', 'medium', 'large'].includes(this.size)
                ? this.size
                : undefined,
            height:
              this.size && !['small', 'medium', 'large'].includes(this.size)
                ? this.size
                : undefined,
            border: this.border ? this.border : 'none',
          }}
        >
          {this.src ? (
            <img class="air-avatar-image" src={this.src} alt={this.name} />
          ) : (
            <div class="air-avatar-initials">{this.getInitials()}</div>
          )}
        </div>
      </Host>
    );
  }
}
