import type { Metadata } from "next";
import { ApolloWrapper } from '@/lib/apollo-wrapper';
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice list",
  description: "Invoice list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Theme>
      </body>
    </html>
  );
}
