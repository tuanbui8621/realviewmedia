import type { ImageLoaderProps } from 'next/image';

export const highQualityImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 90}`;
