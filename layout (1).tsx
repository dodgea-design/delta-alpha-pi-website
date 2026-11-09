import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAPi Chapters | Delta Alpha Pi International Honor Society",
  description: "Find Delta Alpha Pi chapters by state or learn how to establish a chapter at your college or university.",
};

export default function ChaptersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
