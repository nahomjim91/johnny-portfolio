// lib/utils/image.ts
export const generateImageSizes = (baseUrl: string, sizes: number[] = [400, 800, 1200, 1600]) => {
  return sizes.map(size => ({
    src: `${baseUrl}?w=${size}&h=${Math.round(size * 0.75)}&fit=crop&fm=webp&q=80`,
    width: size,
    height: Math.round(size * 0.75)
  }));
};

export const generateSrcSet = (baseUrl: string, sizes: number[] = [400, 800, 1200, 1600]) => {
  const images = generateImageSizes(baseUrl, sizes);
  return images.map(img => `${img.src} ${img.width}w`).join(', ');
};
