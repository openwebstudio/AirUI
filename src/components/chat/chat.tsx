import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'air-chat',
  styleUrl: 'chat.css',
  shadow: true,
})
export class AiChat {
  @State() messages: Array<{ role: string; content: string }> = [];
  @State() userInput: string = ''; // 用来跟踪用户输入
  @State() error: string = ''; // 用来存储错误信息
  @State() isLoading: boolean = false; // 用来控制按钮的加载状态

  // 更新消息列表的帮助函数
  private updateMessages(
    newMessages: Array<{ role: string; content: string }>
  ) {
    this.messages = [...this.messages, ...newMessages];
  }

  // 调用API
  private async fetchAIResponse(prompt: string) {
    try {
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
      if (response.ok) {
        return data.choices[0].message.content;
      } else {
        throw new Error(data.error || 'API 请求失败');
      }
    } catch (err) {
      this.error = `错误: ${err.message || '未知错误'}`; // 更详细的错误信息
      this.updateMessages([{ role: 'assistant', content: this.error }]);
      return null; // 返回 null, 表示没有有效的 AI 响应
    }
  }

  // 处理用户输入
  private handleSubmit = async (e: Event) => {
    e.preventDefault();

    const userInput = this.userInput;

    // 在提交时设置 isLoading 为 true
    this.isLoading = true;

    // 添加用户输入和正在思考的提示
    this.updateMessages([
      { role: 'user', content: userInput },
      { role: 'assistant', content: '正在思考...' },
    ]);

    // 获取AI的回复
    const aiResponse = await this.fetchAIResponse(userInput);

    // 如果 AI 返回了有效响应，更新消息列表
    if (aiResponse) {
      this.updateMessages([
        { role: 'assistant', content: aiResponse }, // 添加 AI 的回答
      ]);
    }

    // 无论请求成功与否，清空输入框内容并更新 State
    this.userInput = ''; // 确保输入框被清空
    this.isLoading = false; // 更新按钮状态为可点击
  };

  render() {
    return (
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
        <div class="space-y-6 mb-4 h-64 overflow-y-auto">
          {/* 如果没有消息且没有错误，显示默认提示 */}
          {this.messages.length === 0 && !this.error && (
            <div class="flex justify-center items-center h-full">
              <air-text>我能为你提供什么？</air-text>
            </div>
          )}
          {/* 显示消息 */}
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
                  src="../../assets/airui-logo.png"
                  shape="circle"
                  class="hydrated"
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
                  src="https://avatars.githubusercontent.com/u/146103794?v=4"
                  shape="circle"
                  class="hydrated"
                ></air-avatar>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={this.handleSubmit} class="flex gap-2">
          <air-input
            class="w-full"
            value={this.userInput} // 绑定 State
            onInput={(e) =>
              (this.userInput = (e.target as HTMLInputElement).value)
            } // 更新 State
            placeholder="输入消息..."
          ></air-input>
          <air-button
            type="submit"
            disabled={this.isLoading} // 禁用按钮，直到 AI 响应
            state="primary" // 根据加载状态修改按钮颜色
            loading={this.isLoading} // 根据加载状态显示加载动画
          >
            {this.isLoading ? '暂停' : '发送'} {/* 显示按钮文本 */}
          </air-button>
        </form>
      </div>
    );
  }
}
