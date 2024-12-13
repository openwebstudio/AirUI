import { Component, Prop, h, State, Method } from "@stencil/core";

@Component({
  tag: "air-side-drawer",
  styleUrl: "air-side-drawer.css",
  shadow: true,
})
export class AirSideDrawer {
  @State() showContactInfo: boolean = false;
  @Prop({ reflect: true }) drawerTitle: string;  // 重命名了 title 为 drawerTitle
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === "contact";
  }

  @Method()
  async open() {  // 添加 async 关键字
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information" class="p-4">
          <h2 class="text-2xl font-bold">Contact Information</h2>
          <p class="mt-2">You can reach us via phone</p>
          <ul class="mt-2 list-disc pl-5">
            <li></li>
            <li>
              E-mail:
              <a href="mailto:example@example.com" class="text-blue-600 hover:underline">
                example@example.com
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return [
      <div class={`fixed inset-0 bg-gray-800 bg-opacity-50 ${this.opened ? 'block' : 'hidden'}`} onClick={this.onCloseDrawer.bind(this)} />,
      <aside class={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${this.opened ? 'translate-x-0' : 'translate-x-full'} ease-in-out`}>
        <header class="flex justify-between items-center p-4 bg-gray-800 text-white">
          <h1 class="text-xl font-semibold">{this.drawerTitle}</h1>  {/* 使用新的 drawerTitle */}
          <button onClick={this.onCloseDrawer.bind(this)} class="text-2xl">&times;</button>
        </header>
        <section id="tabs" class="flex justify-around p-4 bg-gray-100">
          <button
            class={`text-sm px-4 py-2 rounded-md transition-colors ${!this.showContactInfo ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}
            onClick={this.onContentChange.bind(this, "nav")}
          >
            Navigation
          </button>
          <button
            class={`text-sm px-4 py-2 rounded-md transition-colors ${this.showContactInfo ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-700'}`}
            onClick={this.onContentChange.bind(this, "contact")}
          >
            Contact
          </button>
        </section>
        <main class="p-4">
          {mainContent}
        </main>
      </aside>
    ];
  }
}
