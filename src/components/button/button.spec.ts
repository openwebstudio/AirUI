import { newSpecPage } from "@stencil/core/testing";
import { AirButton } from "./button";

describe("air-button", () => {
  it("renders default air-button", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button></air-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("applies size prop correctly", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button size="small"></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.classList.contains("size-small")).toBeTruthy();
  });

  it("applies variant prop correctly", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button variant="outline"></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.classList.contains("variant-outline")).toBeTruthy();
  });

  it("applies color prop correctly", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button color="primary"></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.classList.contains("color-primary")).toBeTruthy();
  });

  it("disables the button when disabled prop is true", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button disabled></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.hasAttribute("disabled")).toBeTruthy();
    expect(button.classList.contains("disabled")).toBeTruthy();
  });

  it("shows loading icon when loading is true", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button loading></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.getAttribute("aria-busy")).toBe("true");
    const loadingIcon = button.querySelector(".native-button__loading-icon");
    expect(loadingIcon).not.toBeNull();
  });

  it("renders icon and suffixIcon correctly", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button icon="✔" suffix-icon="❌"></air-button>`,
    });
    const icon = page.root.shadowRoot.querySelector(".native-button__icon");
    const suffixIcon = page.root.shadowRoot.querySelector(".native-button__suffix-icon");
    expect(icon.textContent).toBe("✔");
    expect(suffixIcon.textContent).toBe("❌");
  });

  it("handles slot content correctly", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button>Click Me</air-button>`,
    });
    expect(page.root.shadowRoot.querySelector("slot")).not.toBeNull();
    expect(page.root.textContent).toContain("Click Me");
  });

  it("updates aria-label when slot is empty", async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button></air-button>`,
    });
    const button = page.root.shadowRoot.querySelector("button");
    expect(button.getAttribute("aria-label")).toBe("Button");
  });

  it('emits buttonClick event on click', async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button>Click Me</air-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    const buttonClickSpy = jest.fn();

    // 监听自定义事件
    page.root.addEventListener('buttonClick', buttonClickSpy);

    // 模拟点击
    button.click();

    // 验证事件被触发
    expect(buttonClickSpy).toHaveBeenCalled();
  });

  it('does not emit buttonClick event when disabled', async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button disabled>Disabled Button</air-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    const buttonClickSpy = jest.fn();

    // 监听自定义事件
    page.root.addEventListener('buttonClick', buttonClickSpy);

    // 模拟点击
    button.click();

    // 验证事件未触发
    expect(buttonClickSpy).not.toHaveBeenCalled();
  });

  it('does not emit buttonClick event when loading', async () => {
    const page = await newSpecPage({
      components: [AirButton],
      html: `<air-button loading>Loading Button</air-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    const buttonClickSpy = jest.fn();

    // 监听自定义事件
    page.root.addEventListener('buttonClick', buttonClickSpy);

    // 模拟点击
    button.click();

    // 验证事件未触发
    expect(buttonClickSpy).not.toHaveBeenCalled();
  });
});

