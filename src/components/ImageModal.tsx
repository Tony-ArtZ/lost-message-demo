import { FC } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop"
      onClick={onClose}
    >
      <div className="relative w-[90vw] h-[90vh] max-w-4xl max-h-4xl">
        <Image
          src={imageSrc}
          alt="Full size image"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default ImageModal;
