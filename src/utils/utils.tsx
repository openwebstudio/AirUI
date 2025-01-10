import classNames from 'classnames';
import { EventEmitter } from '@stencil/core';

// 解析 SVG 字符串并返回其 HTML
export function getSVGHTMLString(svgXml: string): string {
  if (!svgXml || typeof svgXml !== 'string') {
    throw new Error('Invalid SVG string');
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgXml, 'image/svg+xml');

    // 判断是否是 SVG 元素
    if (doc.documentElement?.tagName.toLowerCase() === 'svg') {
      return doc.documentElement.outerHTML;
    }

    throw new Error('Parsed document is not an SVG');
  } catch (e) {
    console.error('SVG Parsing Error:', e);
    throw new Error(`Error parsing SVG: ${e instanceof Error ? e.message : e}`);
  }
}

// 动态计算按钮类名
export const getButtonClass = (
  size: string,
  variant: string,
  color: string,
  loading: boolean,
  disabled: boolean,
  selected: boolean
): string => {
  return classNames(
    'native-button',
    `size-${size}`,
    `variant-${variant}`,
    `color-${color}`,
    {
      loading,
      disabled,
      selected,
    }
  );
};

// 动态处理按钮点击事件
export const handleButtonClick = (
  event: MouseEvent,
  disabled: boolean,
  loading: boolean,
  selected: boolean,
  buttonClick: EventEmitter<{ event: MouseEvent; selected: boolean }>
): void => {
  if (disabled || loading) {
    event.preventDefault();
    return;
  }

  buttonClick.emit({ event, selected });
};

// 处理 Material Icons
const getMaterialIconClass = (name: string) =>
  `material-icons air-icon ${name}`;

// 处理 Font Awesome 图标
const getFontAwesomeClass = (name: string) => `fa-${name} fas air-icon`;

// 处理 BoxIcons 图标
const getBoxIconsClass = (name: string) => `bx-${name} bx air-icon`;

// 处理 BoxIcons Solid 图标
const getBoxIconsSolidClass = (name: string) => `bxs-${name} bxs air-icon`;

// 处理 IconFont 图标
const getIconFontClass = (name: string) => `iconfont icon-${name} air-icon`;

// 处理 IconPark 图标
const getIconParkClass = (name: string) => `iconpark-${name} air-icon`;

// 定义 IconSet 类型
export type IconSet =
  | 'material-icons'
  | 'fas'
  | 'bx'
  | 'bxs'
  | 'iconfont'
  | 'iconpark';

// 根据不同的图标集，返回对应的图标类名
export const getIconClass = (iconSet: IconSet, name: string): string => {
  switch (iconSet) {
    case 'material-icons':
      return getMaterialIconClass(name);
    case 'fas':
      return getFontAwesomeClass(name);
    case 'bx':
      return getBoxIconsClass(name);
    case 'bxs':
      return getBoxIconsSolidClass(name);
    case 'iconfont':
      return getIconFontClass(name);
    case 'iconpark':
      return getIconParkClass(name);
    default:
      throw new Error(`Unknown icon set: ${iconSet}`);
  }
};
