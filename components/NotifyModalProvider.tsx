"use client";

import { createContext, useCallback, useContext, useState } from "react";
import NotifyModal from "./NotifyModal";

type NotifyModalContextValue = {
  openNotify: () => void;
};

const NotifyModalContext = createContext<NotifyModalContextValue | null>(null);

export function useNotifyModal() {
  const ctx = useContext(NotifyModalContext);
  return ctx?.openNotify ?? (() => {});
}

export default function NotifyModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openNotify = useCallback(() => setOpen(true), []);

  return (
    <NotifyModalContext.Provider value={{ openNotify }}>
      {children}
      <NotifyModal open={open} onClose={() => setOpen(false)} />
    </NotifyModalContext.Provider>
  );
}
