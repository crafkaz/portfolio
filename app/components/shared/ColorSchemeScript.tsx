"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useRef } from "react";
import { colorSchemeScript } from "../../lib/colorScheme";

export function ColorSchemeScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;

    return <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />;
  });

  return null;
}
