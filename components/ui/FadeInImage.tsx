"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

/** next/image that fades in once decoded instead of popping in. */
export default function FadeInImage({ alt, className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      alt={alt}
      className={`fade-in-image ${className ?? ""}`}
      data-loaded={loaded ? "true" : "false"}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
    />
  );
}
