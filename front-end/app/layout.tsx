import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { EmployeePortalContextProvider } from "@/contexts/EmployeePortalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Employee Portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased mt-32 w-full m-auto`}>
        <EmployeePortalContextProvider>
          {children}
        </EmployeePortalContextProvider>
      </body>
    </html>
  );
}
