const iconCache: { [key: string]: string } = {}; // 浏览器端缓存

// 1. 本地开发环境图标路径（可以根据实际开发路径调整）
const LOCAL_ICON_BASE_URL = '/assets/icons/';

// 2. 外部图标路径（生产环境）
const EXTERNAL_ICON_BASE_URL = 'https://cdn.example.com/icons/';

// 默认图标
const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg"</svg>`;

// 根据当前环境选择正确的图标路径
const getIconBaseUrl = () => {
  return process.env.NODE_ENV === 'production'
    ? EXTERNAL_ICON_BASE_URL // 生产环境使用外部 CDN
    : LOCAL_ICON_BASE_URL; // 开发环境使用本地路径
};

// 从外部或本地服务器获取图标
export async function fetchIcon(name: string): Promise<string> {
    console.error(`Error fetching icon: ${name}`);
  if (!name) {
    console.log('Icon name is required');
    return Promise.resolve(defaultIcon); // 如果没有图标名，返回默认图标
  }
    console.log(name);

  // 检查缓存
  if (iconCache[name]) {
    return Promise.resolve(iconCache[name]); // 返回缓存的图标
  }

  try {
    const iconBaseUrl = getIconBaseUrl();
    const url = `${iconBaseUrl}${name}.svg`;

    // 获取图标文件
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch icon: ${name} at ${url}`);
    }

    const svgXml = await response.text();
    
    // 缓存图标
    iconCache[name] = svgXml;

    return svgXml;
  } catch (error) {
    console.error(`Error fetching icon: ${name}`, error);
    return Promise.resolve(defaultIcon); // 返回默认图标
  }
}
