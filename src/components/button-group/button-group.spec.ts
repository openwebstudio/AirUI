import { newSpecPage } from "@stencil/core/testing";
import { ButtonGroup } from "./button-group";

describe("air-button-group", () => {
  it("renders default button group", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group></air-button-group>`,
    });
    const group = page.root.shadowRoot.querySelector("div");
    expect(group).toHaveAttribute("role");
    expect(group).toHaveClass("flex");
    expect(group).toHaveClass("flex-row");
    expect(group.style.gap).toBe("5px");
  });

  it("applies direction prop correctly", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group direction="vertical"></air-button-group>`,
    });
    const group = page.root.shadowRoot.querySelector("div");
    expect(group).toHaveClass("flex-col");
    expect(group).not.toHaveClass("flex-row");
  });

  it("applies spacing prop correctly", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group spacing="10px"></air-button-group>`,
    });
    const group = page.root.shadowRoot.querySelector("div");
    expect(group.style.gap).toBe("10px");
  });

  it("applies customStyles prop correctly", async () => {
    const customStyles = { border: "1px solid red", padding: "10px" };
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group></air-button-group>`,
    });
    page.root.customStyles = customStyles;
    await page.waitForChanges();
    const group = page.root.shadowRoot.querySelector("div");
    expect(group.style.border).toBe("1px solid red");
    expect(group.style.padding).toBe("10px");
  });

  it("renders slot content correctly", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group><button>Button 1</button><button>Button 2</button></air-button-group>`,
    });
    const slotContent = page.root.shadowRoot.querySelector("slot");
    expect(slotContent).not.toBeNull();
    expect(page.root.innerHTML).toContain("Button 1");
    expect(page.root.innerHTML).toContain("Button 2");
  });

  it("applies group prop correctly", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group group="test-group"></air-button-group>`,
    });
    const group = page.root.shadowRoot.querySelector("div");
    expect(group.getAttribute("data-group")).toBe("test-group");
  });

  it("applies correct accessibility attributes", async () => {
    const page = await newSpecPage({
      components: [ButtonGroup],
      html: `<air-button-group></air-button-group>`,
    });
    const group = page.root.shadowRoot.querySelector("div");
    expect(group.getAttribute("role")).toBe("group");
    expect(group.getAttribute("aria-label")).toBe("Button Group");
  });
});
