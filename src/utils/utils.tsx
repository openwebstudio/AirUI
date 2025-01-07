export function getSVGHTMLString(svgXml: string): string {
    if (!svgXml || typeof svgXml !== 'string') {
      throw new Error('Invalid SVG string');
    }
  
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgXml, 'image/svg+xml');
  
      // 判断是否是 SVG 元素
      if (doc.documentElement instanceof SVGElement) {
        return doc.documentElement.outerHTML;
      }
  
      // 如果不是，进一步检查
      if (doc.documentElement.tagName === 'svg') {
        const svgElement = doc.documentElement as unknown as SVGElement;
        return svgElement.outerHTML;
      }
  
      throw new Error('Parsed document is not an SVG');
    } catch (e) {
      console.error('SVG Parsing Error:', e);
      throw new Error(`Error parsing SVG: ${e.message || e}`);
    }
  }
  