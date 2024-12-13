import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "air-card",
  styleUrl: "air-card.css",
  shadow: true,
})
export class AirCard {
  @Prop() title: string; // 卡片标题
  @Prop() description: string; // 卡片描述
  @Prop() imageUrl: string; // 卡片图片 URL
  @Prop() tags: string[] = []; // 标签列表
  @Prop() showButton: boolean = true; // 是否显示按钮，默认为显示

  render() {
    return (
      <div class="max-w-sm w-auto rounded-3xl overflow-hidden shadow-xl bg-white p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* 图片部分 */}
        {this.imageUrl && (
          <img
            class="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-110"
            src={this.imageUrl || "https://via.placeholder.com/300"}
            alt="Card Image"
          />
        )}
  
        <div class="px-6 py-4">
          {/* 卡片标题 */}
          <div class="font-semibold text-2xl text-gray-900 mb-2">{this.title || "Card Title"}</div>
  
          {/* 卡片描述 */}
          <p class="text-gray-600 text-base mb-4">{this.description || "This is a description of the card content."}</p>
  
          {/* 标签部分 */}
          <div class="flex flex-wrap space-x-2 mb-4">
            {this.tags.map((tag) => (
              <span class="bg-gray-200 text-gray-700 text-xs font-semibold rounded-full px-3 py-1 mb-2">
                {tag}
              </span>
            ))}
          </div>
  
          {/* 按钮部分 */}
          {this.showButton && (
            <div>
              <slot name="button">
                <button class="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:bg-gradient-to-l transition-colors duration-300">
                  Learn More
                </button>
              </slot>
            </div>
          )}
  
          {/* 额外内容部分 */}
          <div class="mt-4">
            <slot name="extra-content"></slot>
          </div>
        </div>
      </div>
    );
  }
}