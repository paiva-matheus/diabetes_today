import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";

const urbanist = Urbanist({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diabetes todo dia",
  description:
    "Fique informado sobre a diabetes, avanços médicos, dicas de cuidados e estilo de vida saudável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <ThemeModeScript />
      </head>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
