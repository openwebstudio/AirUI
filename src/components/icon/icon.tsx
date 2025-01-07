import { Component, h, Host, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { fetchIcon } from './fetchIcon';
import { getSVGHTMLString } from '../../utils/utils';

/**
 * @name AirIcon
 * @description Icons are visual symbols used to represent ideas, objects, or actions.
 * @overview Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.
 * @category General
 * @example <air-icon name="home" size="2rem" />
 */
@Component({
  tag: 'air-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class AirIcon {
  /**
   * The identifier for the icon.
   * This name corresponds to a specific SVG asset in the icon set.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The size of the icon.
   * This can be specified in pixels (px) or rem units to control the icon's dimensions.
   * If a number is provided, it will be treated as rem units. For example, '16px', '2rem', or 2 would be valid values.
   */
  @Prop() size: string;

  /**
   * Custom CSS class to apply to the icon.
   */
  @Prop() customClass: string;

  /**
   * Custom CSS style to apply to the icon.
   */
  @Prop() customStyle: { [key: string]: string } | string;

  /**
   * The event fired when the icon is clicked.
   */
  @Event() iconClicked: EventEmitter;

  @State() svg: string;
  @State() isLoaded: boolean = false;

  private static svgCache: { [key: string]: string } = {}; // Static cache to store fetched SVGs

  @Watch('name')
  async handleNameChange(newValue: string) {
    await this.fetchSvg(newValue);
  }

  /**
   * Fetches the SVG associated with the icon name.
   * This method will first check the cache before fetching from the server.
   */
  async fetchSvg(name: string) {
    if (AirIcon.svgCache[name]) {
      this.svg = AirIcon.svgCache[name]; // Use cached SVG if available
      this.isLoaded = true;
    } else {
      try {
        const svgXml = await fetchIcon(name);
        const optimizedSvg = this.optimizeSvg(svgXml);
        this.svg = getSVGHTMLString(optimizedSvg);
        AirIcon.svgCache[name] = this.svg; // Cache the SVG for future use
        this.isLoaded = true;
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
        this.svg = ''; // Handle error gracefully
      }
    }
  }

  /**
   * Optimizes the SVG by removing unnecessary attributes.
   * For example, removes 'fill' and 'stroke' attributes.
   */
  optimizeSvg(svgXml: string): string {
    return svgXml
      .replace(/fill=".*?"/g, 'fill="currentColor"') // Use currentColor for inheriting color
      .replace(/stroke=".*?"/g, '')
      .replace(/\s{2,}/g, ' '); // Remove unnecessary spaces
  }

  /**
   * Handles icon click event.
   */
  handleClick() {
    this.iconClicked.emit(); // Emit the click event
  }

  /**
   * Initializes the component by fetching the initial icon.
   */
  async componentWillLoad() {
    await this.fetchSvg(this.name);
  }

  /**
   * Returns the custom class and style dynamically.
   */
  getCustomClass() {
    // If customClass is provided, return it. Otherwise, return an empty string.
    return this.customClass || '';
  }

  getCustomStyle() {
    // If customStyle is a string, convert it into an object (for inline styles).
    if (typeof this.customStyle === 'string') {
      const styleObject = this.customStyle.split(';')
        .filter(style => style.trim() !== '')
        .reduce((styles, style) => {
          const [key, value] = style.split(':').map(str => str.trim());
          if (key && value) {
            styles[key] = value;
          }
          return styles;
        }, {});
      return styleObject;
    }

    // If customStyle is already an object, return it directly.
    return this.customStyle || {};
  }

  render() {
    // Apply size based on 'size' prop. If it's a valid size class, use it. Otherwise, use inline styles.
    const sizeClasses = {
      xs: 'w-2 h-2',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    };

    // Default to 'w-6 h-6' for invalid sizes, but allow custom rem/px units via style
    const defaultSizeClass = sizeClasses[this.size] || '';
    const inlineStyle = (this.size && !['xs', 'sm', 'md', 'lg', 'xl'].includes(this.size))
      ? { width: this.size, height: this.size }
      : {};

    return (
      <Host>
        <div
          class={`icon ${this.getCustomClass()} ${defaultSizeClass}`} // Apply customClass dynamically
          style={{ ...this.getCustomStyle(), ...inlineStyle }} // Apply customStyle dynamically
          innerHTML={this.svg}
          onClick={() => this.handleClick()} // Handle the click event
          aria-label={this.name} // Provide an accessible label for the icon
          role="img" // Indicate the role as an image
        ></div>
        {!this.isLoaded && <div>Loading...</div>} {/* Display loading indicator */}
      </Host>
    );
  }
}
