import { Component, Prop, h, State,Method } from "@stencil/core";

@Component({
  tag: "uc-side-drawer",
  styleUrl: "./side-drawer.css",
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo: boolean = false;
  @Prop({
    reflect: true,
  })
  title: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === "contact";
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone</p>
          <ul>
            <li></li>
            <li>
              E-mail:
              <a href="mailto:example@example.com">example@example.com</a>
            </li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)} />,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button
            class={!this.showContactInfo ? "active" : ""}
            onClick={this.onContentChange.bind(this, "nav")}
          >
            Navigation
          </button>
          <button
            class={this.showContactInfo ? "active" : ""}
            onClick={this.onContentChange.bind(this, "contact")}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
