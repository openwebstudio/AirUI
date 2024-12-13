import { Component, Host, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'air-topbar',
  styleUrl: 'air-topbar.css',
  shadow: true,
})
export class AirTopBar {
  @Element() el: HTMLElement;
  @State() isScrolled = false;

  // 定义可配置的背景颜色和渐变
  @Prop() defaultBgColor: string = ''; // 默认背景色
  @Prop() scrollBgColor: string = 'bg-transparent'; // 滚动时背景色
  @Prop() gradientBgColor: string = 'bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500'; // 滚动时的渐变背景
  @Prop() textColor: string = 'text-black'; // 默认文字颜色
  @Prop() scrolledTextColor: string = 'text-gray-900'; // 滚动后的文字颜色
  @Prop() shadowEffect: boolean = true; // 是否启用阴影效果
  @Prop() titleText: string = 'AirComponents'; // 标题文本
  @Prop() titleTextColor: string = 'text-black-500'; // 标题文本颜色

  componentDidLoad() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnload() {
    window.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = () => {
    this.isScrolled = window.scrollY > this.el.offsetTop;
  };

  render() {
    const {
      isScrolled,
      defaultBgColor,
      scrollBgColor,
      gradientBgColor,
      textColor,
      scrolledTextColor,
      shadowEffect,
      titleText,
      titleTextColor,
    } = this;

    return (
      <Host>
        <div
          class={{
            'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300': true,
            [defaultBgColor]: !isScrolled, // 默认背景色
            [scrollBgColor]: isScrolled, // 滚动时透明背景
            [gradientBgColor]: isScrolled, // 滚动时渐变背景
            'shadow-lg': shadowEffect && isScrolled, // 滚动时加上阴影
            'p-4': true, // 增加内边距，确保内容不被贴边
            'py-6': true, // 增加上下内边距
          }}
        >
          <div
            class={{
              'flex items-center justify-between w-full': true,
              [textColor]: !isScrolled, // 滚动时文字颜色
              [scrolledTextColor]: isScrolled, // 滚动时文字颜色
            }}
          >
            <div class="flex items-center gap-2">
                <span class={`font-extrabold text-3xl font-semibold ${titleTextColor}`}>
                  {titleText}
              </span>
            </div>

            <div class="flex gap-6">
              <slot></slot> {/* 留出插槽以便插入 LinkButton 或其他自定义内容 */}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
