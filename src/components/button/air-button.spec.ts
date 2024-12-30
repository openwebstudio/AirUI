import { newSpecPage } from '@stencil/core/testing';
import { AirButton } from './air-button';

describe('air-button', () => {
  it('renders the button with default properties', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button></air-button>`,
    });
    expect(root.shadowRoot.querySelector('button')).toEqualHtml(`
      <button class="native-button size-medium variant-default" aria-label="Button" title="Button" style="--button-color: blue;">
        <slot></slot>
      </button>
    `);
  });

  it('renders with custom size and variant', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button size="large" variant="primary"></air-button>`,
    });
    expect(root.shadowRoot.querySelector('button')).toEqualHtml(`
      <button class="native-button size-large variant-primary" aria-label="Button" title="Button" style="--button-color: blue;">
        <slot></slot>
      </button>
    `);
  });

  it('applies custom color', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button style="--button-color: red;"></air-button>`,
    });
    expect(root.shadowRoot.querySelector('button').style.getPropertyValue('--button-color')).toBe('red');
  });

  it('shows loading icon when loading is true', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button loading></air-button>`,
    });
    const loadingIcon = root.shadowRoot.querySelector('.air-button__loading-icon');
    expect(loadingIcon).toBeTruthy();
  });

  it('shows icon when icon is passed', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button icon="⭐"></air-button>`,
    });
    const icon = root.shadowRoot.querySelector('.air-button__icon');
    expect(icon.textContent).toBe('⭐');
  });

  it('shows suffix icon when suffixIcon is passed and not loading', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button suffix-icon="➡️"></air-button>`,
    });
    const suffixIcon = root.shadowRoot.querySelector('.air-button__suffix-icon');
    expect(suffixIcon.textContent).toBe('➡️');
  });

  it('renders a button with text content in the slot', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button>Click Me</air-button>`,
    });
    expect(root.shadowRoot.querySelector('button').textContent).toBe('Click Me');
  });

  it('sets aria-label correctly when no slot content is provided', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button></air-button>`,
    });
    const button = root.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Button');
  });

  it('sets aria-label to null when slot content is present', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button>Click Me</air-button>`,
    });
    const button = root.shadowRoot.querySelector('button');
    expect(button.getAttribute('aria-label')).toBeNull();
  });

  it('disables the button when disabled is true', async () => {
    const { root } = await newSpecPage({
      components: [AirButton],
      html: `<air-button disabled></air-button>`,
    });
    const button = root.shadowRoot.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});
