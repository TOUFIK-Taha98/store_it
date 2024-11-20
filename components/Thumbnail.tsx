import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  extension: string;
  imageClassName?: string;
  type: string;
  url?: string;
}

export const Thumbnail = ({
  className,
  extension,
  imageClassName,
  type,
  url = "",
}: Props) => {
  const isImage = type === "image" && extension !== "svg";

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        alt="thumbnail"
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImage && "thumbnail-image"
        )}
        height={100}
        src={isImage ? url : getFileIcon(extension, type)}
        width={100}
      />
    </figure>
  );
};
export default Thumbnail;
