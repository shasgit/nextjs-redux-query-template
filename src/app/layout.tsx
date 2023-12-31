import { ReduxProviders } from "@/redux/ReduxProviders";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/query/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        Layout from Main
        <ReduxProviders>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ReduxProviders>
      </body>
    </html>
  );
}
