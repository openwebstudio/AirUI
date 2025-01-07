import {
    Component,
    ComponentInterface,
    Element,
    h,
    Host,
    Prop,
  } from '@stencil/core';
  
  /**
   * @name AirText
   * @description Typography for rendering headlines, paragraphs, captions, and body text with various style options.
   * @category General
   * @example <air-text type="heading" level="1">Heading</air-text>
   */
  @Component({
    tag: 'air-text',
    styleUrl: 'text.css',
    shadow: true,
  })
  export class AirText implements ComponentInterface {
    @Prop({ reflect: true }) type:
      | 'code'
      | 'helper-text'
      | 'label'
      | 'legal'
      | 'heading'
      | 'body'
      | 'body-compact'
      | 'body-large'
      | 'body-emphasis'
      | 'fluid-heading' = 'body';
  
    @Prop({ reflect: true }) expressive: boolean = false;
  
    @Prop({ reflect: true }) headingSize: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  
    @Prop({ reflect: true }) headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  
    @Prop({ reflect: true }) inline: boolean = false;
  
    @Prop({ reflect: true, mutable: true }) configAria: any = {};
  
    @Prop({ reflect: true }) color:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'helper'
      | 'error'
      | 'on-color'
      | 'inverse' = 'primary';
  
    @Element() elm!: HTMLElement;
  
    componentWillLoad() {
        // 在调用之前检查 elm 和 getAttributeNames() 是否存在
        if (this.elm && typeof this.elm.getAttributeNames === 'function') {
          this.elm.getAttributeNames().forEach((name: string) => {
            if (name.includes('aria-')) {
              this.configAria[name] = this.elm.getAttribute(name);
              this.elm.removeAttribute(name);
            }
          });
        }
      }
      
    private getTextClass() {
      let textClass = ''; // No default text size
  
      // Text type
      switch (this.type) {
        case 'heading':
          textClass = `heading-${this.headingSize}`;
          break;
        case 'body':
          textClass = 'body-text';
          break;
        case 'body-compact':
          textClass = 'body-compact';
          break;
        case 'body-large':
          textClass = 'body-large';
          break;
        case 'body-emphasis':
          textClass = 'body-emphasis';
          break;
        case 'code':
          textClass = 'code-text';
          break;
        case 'label':
          textClass = 'label-text';
          break;
        case 'helper-text':
          textClass = 'helper-text';
          break;
        case 'legal':
          textClass = 'legal-text';
          break;
        case 'fluid-heading':
          textClass = 'fluid-heading';
          break;
        default:
          break;
      }
  
        // Add expressive style if enabled
  if (this.expressive) {
    textClass += ' expressive';  // Add a specific class for expressive styling
  }
    
      // Color style
      textClass += this.getColorClass();
  
      // Inline text
      if (this.inline) {
        textClass += ' inline';
      }
  
      return textClass;
    }
  
    private getColorClass() {
      switch (this.color) {
        case 'primary':
          return ' text-primary';
        case 'secondary':
          return ' text-secondary';
        case 'tertiary':
          return ' text-tertiary';
        case 'error':
          return ' text-error';
        case 'inverse':
          return ' text-inverse';
        default:
          return '';
      }
    }
  
    render() {
      return (
        <Host>
          <div class={this.getTextClass()}>
            {this.renderText()}
          </div>
        </Host>
      );
    }
  
    renderText() {
      if (this.type === 'heading') {
        return this.renderHeading();
      } else {
        return this.renderSimpleText();
      }
    }
  
    renderSimpleText() {
      if (this.inline) {
        return (
          <span class="native-element" {...this.configAria}>
            <slot />
          </span>
        );
      } else {
        return (
          <p class="native-element" {...this.configAria}>
            <slot />
          </p>
        );
      }
    }
  
    renderHeading() {
      let headingLevel = this.headingLevel;
      if (!headingLevel) {
        switch (this.headingSize) {
          case 7:
          case 6:
            headingLevel = 1;
            break;
          case 5:
            headingLevel = 2;
            break;
          case 4:
            headingLevel = 3;
            break;
          case 3:
            headingLevel = 4;
            break;
          case 2:
            headingLevel = 5;
            break;
          default:
            headingLevel = 6;
        }
      }
  
      const Heading = `h${headingLevel}`;
      return (
        <Heading class="native-element" {...this.configAria}>
          <slot />
        </Heading>
      );
    }
  }
  