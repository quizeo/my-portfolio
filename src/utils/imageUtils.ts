// Create a utility function in src/utils/imageUtils.ts
export const getOptimizedImageUrl = (imageObj: any): string => {
  const originalUrl = Object.values(imageObj)[0] as string;

  // If using an image optimization service like Cloudinary or Imgix
  // return `https://your-image-service.com/optimize?url=${encodeURIComponent(originalUrl)}`;

  return originalUrl;
};
