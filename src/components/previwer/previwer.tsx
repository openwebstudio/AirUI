import { h, Component, State, Prop, Element } from '@stencil/core';

@Component({
  tag: 'air-previewer',
  styleUrl: 'previewer.scss',
  shadow: true,
})
export class AirPreviewer {
  @Element() el: HTMLElement;

  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  @State() code: string = '';
  @State() showSource: boolean = false;
  @State() generatedBlitzUrl: string = '';

  private observer: MutationObserver;

  componentDidLoad() {
    const slot = this.el.shadowRoot.querySelector('slot');
    if (slot) {
      const updateCode = () => {
        const nodes = slot.assignedNodes({ flatten: true });
        const formattedHTML = nodes
          .map((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              return node.textContent?.trim() || ''; // Keep text content
            }
            if (node.nodeType === Node.ELEMENT_NODE) {
              return (node as Element).outerHTML; // Cast to Element to access outerHTML
            }
            return ''; // Ignore non-element and non-text nodes
          })
          .filter((content) => content !== '')
          .join('\n');
        this.code = formattedHTML.trim();
      };

      // Initial content extraction
      updateCode();

      // Observe slot content changes
      this.observer = new MutationObserver(updateCode);
      this.observer.observe(slot, { childList: true, subtree: true });
    }

    // Generate Blitz URL if not provided
    this.generatedBlitzUrl = this.generateBlitzUrl();
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleInputChange(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.code = textarea.value;

    // Update DOM content after code change
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.code, 'text/html');
    const slotContent = doc.body.childNodes;
    const slot = this.el.shadowRoot.querySelector('slot');

    if (slot) {
      const parentNode = this.el.querySelector('[slot]') || this.el;

      // Remove existing children before appending new ones
      while (parentNode.firstChild) {
        parentNode.firstChild.remove();
      }

      // Clone and append new nodes
      slotContent.forEach((node) => {
        parentNode.appendChild(node.cloneNode(true));
      });
    }

    // Regenerate Blitz URL after code update
    this.generatedBlitzUrl = this.generateBlitzUrl();
  }

  copyToClipboard() {
    if (this.code) {
      navigator.clipboard.writeText(this.code).then(() => {
        console.log('Code copied to clipboard!');
      });
    }
  }

  generateBlitzUrl(): string {
    if (!this.code) {
      console.warn('Code is empty, unable to generate StackBlitz URL.');
      return '';
    }
    // URL encode the code
    const encodedCode = encodeURIComponent(this.code);
    const url = `https://stackblitz.com/edit/${encodedCode}`;
    console.log('Generated Blitz URL:', url); // For debugging
    return url;
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
            href={this.generatedBlitzUrl || '#'}
            target="_blank"
            class="action-btn"
            title="View on StackBlitz"
            rel="noopener noreferrer"
          >
            <air-icon
              name="open_in_new"
              iconSet="material-icons"
              color="#007ACC"
            />
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
            />
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
            />
          </button>
        </div>

        {this.showSource && (
          <div class="source-code">
            <textarea
              value={this.code}
              style={{
                width: '100%',
                height: '200px',
                fontFamily: 'monospace',
                fontSize: '14px',
                whiteSpace: 'pre',
                overflow: 'auto',
              }}
              onInput={(event) => this.handleInputChange(event)}
            />
          </div>
        )}
      </div>
    );
  }
}
