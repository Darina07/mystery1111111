import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  onLoad?: () => void;
}

/**
 * Optimized image component that supports WebP with fallback
 */
export const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  onLoad,
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  // If webpSrc is provided, use picture element for format selection
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          onLoad={handleLoad}
        />
      </picture>
    );
  }

  // Standard img with optimization attributes
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onLoad={handleLoad}
    />
  );
};

export default OptimizedImage;
