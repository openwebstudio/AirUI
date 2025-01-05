import {
  Component,
  ComponentInterface,
  h,
  Host,
  Prop,
  State,
  Element,
} from "@stencil/core";/**
* Button Group component for grouping multiple buttons together
* with optional customization of layout and spacing.
*/
@Component({
  tag: "air-button-group",
  styleUrl: "button-group.css",
  shadow: true,
})
export class ButtonGroup implements ComponentInterface {
  @Element() nativeElement!: HTMLElement;

  @Prop() direction: "horizontal" | "vertical" = "horizontal"; // Direction of button group layout
  @Prop() spacing: string = "5px"; // Spacing between buttons
  @Prop() customStyles: { [key: string]: string } = {}; // Custom CSS class
  @Prop() group: string = ""; // Custom group name for targeting with CSS
  
  @State() buttonCount: number = 0; // Track number of buttons in the group

  // Slot change handler to count the buttons
  private onSlotChange() {
    const slot = this.nativeElement.shadowRoot?.querySelector("slot");
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      this.buttonCount = assignedNodes ? assignedNodes.length : 0;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={`flex ${this.direction === "horizontal" ? "flex-row" : "flex-col"}`}
          style={{ gap: this.spacing, ...this.customStyles }}
          data-group={this.group}
          role="group"
          aria-label="Button Group"
        >
          <slot onSlotchange={this.onSlotChange.bind(this)} />
        </div>
      </Host>
    );
  }
}
