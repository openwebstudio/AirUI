import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'air-chat',
  styleUrl: 'chat.css',
  shadow: true,
})
export class AiChat {
  @State() messages: Array<{ role: string; content: string }> = [];
  private inputRef: HTMLInputElement;

  // 调用API
  private async fetchAIResponse(prompt: string) {
    const response = await fetch(
      'https://api.siliconflow.cn/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer sk-lmztunjtjtuvgsnriqltrrohmeygybeemvweaxweqdfrmspk', // 替换为你的 API 密钥
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-ai/DeepSeek-V3',
          messages: [...this.messages, { role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();
    return data.choices[0].message.content;
  }

  // 处理用户输入
  private handleSubmit = async (e: Event) => {
    e.preventDefault();
    const userInput = this.inputRef.value;

    this.messages = [
      ...this.messages,
      { role: 'user', content: userInput },
      { role: 'assistant', content: '正在思考...' },
    ];

    const aiResponse = await this.fetchAIResponse(userInput);
    this.messages = [
      ...this.messages.slice(0, -1),
      { role: 'assistant', content: aiResponse },
    ];

    this.inputRef.value = '';
  };

  render() {
    return (
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
        <div class="space-y-4 mb-4 h-64 overflow-y-auto">
          {this.messages.map((msg, index) => (
            <div
              key={index}
              class={`flex items-center gap-2 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* 头像的位置根据消息角色调整 */}
              {msg.role !== 'user' && (
                <air-avatar
                  size="small"
                  name="机器人"
                  shape="circle"
                  class="air-bg-light"
                ></air-avatar>
              )}

              <div
                class={`p-3 rounded-lg ${
                  msg.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                }`}
              >
                {msg.content}
              </div>

              {/* 只有用户发送消息时，显示头像 */}
              {msg.role === 'user' && (
                <air-avatar
                  size="small"
                  name="用户"
                  shape="circle"
                  class="air-bg-light"
                ></air-avatar>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={this.handleSubmit} class="flex gap-2">
          <input
            ref={(el) => (this.inputRef = el)}
            class="flex-1 border rounded p-2"
            placeholder="输入消息..."
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            发送
          </button>
        </form>
      </div>
    );
  }
}
