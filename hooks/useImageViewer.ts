import { useState } from "react";

export const useImageViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    src: "",
    alt: "",
  });

  const openImageViewer = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setIsOpen(true);
  };

  const closeImageViewer = () => {
    setIsOpen(false);
    // Clear image data after animation completes
    setTimeout(() => {
      setCurrentImage({ src: "", alt: "" });
    }, 300);
  };

  return {
    isOpen,
    currentImage,
    openImageViewer,
    closeImageViewer,
  };
};
