import React from "react";
import { DataProvider } from "../_hooks/useData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GBC Infrastructure - Projects",
  description: "GBC Infrastructure - Projects",
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return <DataProvider>{children}</DataProvider>;
};

export default ProjectLayout;
