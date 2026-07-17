"use client";

import { useEffect } from "react";
import { interceptFeatureHashOnMount } from "@/lib/motion/hashBoot";

export default function HashBoot() {
  useEffect(() => {
    interceptFeatureHashOnMount();
  }, []);

  return null;
}
