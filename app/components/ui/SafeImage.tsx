"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

function normalizeSrc(src: string): string | null {
  if (!src || src.trim() === "") return null;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/")) return src;
  return `/${src}`;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.jpg",
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  const normalizedSrc = normalizeSrc(src);
  const imgSrc = error || !normalizedSrc ? fallbackSrc : normalizedSrc;

  return (
    <Image
      width={1000}
      height={1000}
      className="w-full h-full object-cover"
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setError(true)}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  );
}
