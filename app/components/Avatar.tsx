"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
  height?: number;
  width?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, height, width }) => {
  return (
    <Image
      className="rounded-full"
      height={height || "30"}
      width={width || "30"}
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
