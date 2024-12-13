import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'air-foot-nav',
  styleUrl: 'air-foot-nav.css',
  shadow: true,
})
export class AirFootNav {
  render() {
    return (
      <Host>
        <div class="bg-gray-900 text-white p-6">
          <div class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">

            {/* 左侧部分 */}
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
              {/* 插槽：标题 */}
              <h2 class="black-3xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out">
              <slot name="title">Air Components</slot>
              </h2>

              
              {/* 插槽：描述 */}
              <p class="text-lg opacity-80">
                <slot name="description">A lightweight collection of reusable Web Components built with StencilJS and Tailwind CSS.</slot>
              </p>
              
              <p class="text-sm opacity-60">
                <slot name="extra-description">Inspired by modern UI libraries, and designed to be fast and customizable.</slot>
              </p>

              {/* 插槽：外部链接 */}
              <a
                href="https://github.com/SisyphusZheng/air-components"
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-400 hover:text-teal-600 mt-2"
              >
                <slot name="external-link">Visit GitHub Repository</slot>
              </a>
            </div>

            {/* 右侧部分 */}
            <div class="flex flex-col w-full lg:w-1/2">
              <h3 class="text-xl font-semibold uppercase opacity-70">
                <slot name="links-title">Quick Links</slot>
              </h3>
              
              <ul class="space-y-4 mt-4">
                {/* 插槽：链接 */}
                <slot name="links">
                  <li>
                    <a
                      href="https://stenciljs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-teal-400 hover:text-teal-600"
                    >
                      StencilJS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-teal-400 hover:text-teal-600"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/SisyphusZheng/air-components"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-teal-400 hover:text-teal-600"
                    >
                      Air Components Docs
                    </a>
                  </li>
                </slot>
              </ul>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
