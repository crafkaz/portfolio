import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import { siteMetadata } from "./lib/config";
import { metadata as siteMetadataConfig } from "./lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.lang} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
