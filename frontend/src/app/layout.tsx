import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Developed as Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav>
          <ul>
            <li>
              <Link href="/dashboard/performancemetrics">
                Performance Metrics
              </Link>
            </li>
            <li>
              <Link href="/dashboard/editsnapshotpolicy">
                Edit Snapshot Policy
              </Link>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
