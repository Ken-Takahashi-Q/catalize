"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}
