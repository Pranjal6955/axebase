"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LogoSwitcher = ({
  width = 35,
  height = 35,
}: {
  width?: number;
  height?: number;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width, height }} />;
  }

  const isLight = resolvedTheme === "light";

  return (
    <Image
      alt="Axebase"
      src={isLight ? "/logos/light_logos.png" : "/logos/logo.png"}
      width={width}
      height={height}
    />
  );
};
