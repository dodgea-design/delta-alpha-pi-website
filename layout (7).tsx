import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Alpha Pi International Honor Society",
  description: "Recognizing academic achievement, leadership, advocacy, and pride among college students with disabilities.",
  icons: {
    icon: "/dapi-logo.png",
    shortcut: "/dapi-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
