import { Component, Prop, State, h, Element, Watch } from '@stencil/core';

@Component({
  tag: 'air-previewer',
  styleUrl: 'previewer.scss',
  shadow: true,
})
export class AirPreviewer {
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() customLink: string = 'https://github.com/SisyphusZheng/Components'; // 默认链接
  @State() code: string = '';
  @State() showSource: boolean = false;
  @Element() el: HTMLElement;

  observer: MutationObserver;

  // 监听 customLink 的变化
  @Watch('customLink')
  watchCustomLink(newValue: string) {
    console.log('customLink changed to:', newValue);
  }

  // 验证链接是否有

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector('slot');

    if (slot) {
      const updateCode = () => {
        const nodes = slot.assignedNodes({ flatten: true });
        const formattedHTML = nodes
          .map((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              return this.formatHTML((node as HTMLElement).outerHTML);
            }
            if (node.nodeType === Node.TEXT_NODE) {
              return node.textContent?.trim() || '';
            }
            return '';
          })
          .filter((content) => content !== '')
          .join('\n');
        this.code = formattedHTML.trim();
      };

      updateCode();

      this.observer = new MutationObserver(updateCode);
      this.observer.observe(slot, { childList: true, subtree: true });
    }
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleInputChange(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.code = textarea.value;

    const parser = new DOMParser();
    const doc = parser.parseFromString(this.code, 'text/html');
    const slotContent = doc.body.childNodes;

    const slot = this.el.shadowRoot.querySelector('slot');
    if (slot) {
      const parentNode = this.el.querySelector('[slot]') || this.el;
      while (parentNode.firstChild) {
        parentNode.firstChild.remove();
      }
      slotContent.forEach((node) => {
        parentNode.appendChild(node.cloneNode(true));
      });
    }
  }

  copyToClipboard() {
    if (this.code) {
      navigator.clipboard.writeText(this.code).then(() => {
        console.log('Code copied to clipboard!');
      });
    }
  }

  formatHTML(html: string): string {
    const formatted = html
      .replace(/></g, '>\n<')
      .replace(/( )*<(\/?)(\w+)([^>]*)>/g, (match, _, closing, tag, rest) => {
        const indent = closing ? '  ' : '';
        console.log(match); // 在这里使用 match，例如打印完整的匹配内容
        return `${indent}<${closing}${tag}${rest}>`;
      });
    return formatted;
  }

  render() {
    const sizeClass =
      {
        small: 'preview-small',
        medium: 'preview-medium',
        large: 'preview-large',
      }[this.size] || 'preview-medium';

    return (
      <div class={`preview-container ${sizeClass}`}>
        <div class="preview">
          <slot></slot>
        </div>

        <div class="actions">
          <a
            href={this.customLink}
            target="_blank"
            class="action-btn"
            title="View on YourLink"
          >
            <air-icon
              name="open_in_new"
              iconSet="material-icons"
              color="#007ACC"
            ></air-icon>
          </a>
          <button
            onClick={() => (this.showSource = !this.showSource)}
            class="action-btn"
            title={this.showSource ? 'Hide Source Code' : 'Show Source Code'}
          >
            <air-icon
              name={this.showSource ? 'visibility_off' : 'visibility'}
              iconSet="material-icons"
              color="currentColor"
            ></air-icon>
          </button>
          <button
            onClick={() => this.copyToClipboard()}
            class="action-btn"
            title="Copy Source Code"
          >
            <air-icon
              name="content_copy"
              iconSet="material-icons"
              color="currentColor"
            ></air-icon>
          </button>
        </div>

        {this.showSource && (
          <div class="source-code">
            <textarea
              value={this.code}
              style={{
                width: '100%',
                whiteSpace: 'pre-wrap',
                padding: '12px',
                fontSize: '1rem',
                lineHeight: '1.5',
                borderRadius: '8px',
                border: '1px solid #ddd',
                backgroundColor: 'rgba(247, 247, 247, 0.9)',
                color: '#333',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                resize: 'vertical',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onInput={(event) => this.handleInputChange(event)}
            />
          </div>
        )}
      </div>
    );
  }
}
