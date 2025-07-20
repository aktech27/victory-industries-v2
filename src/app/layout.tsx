import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";

const customFont = Poppins({
  subsets: ["latin"],
  variable: "--font-custom",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Victory Industries",
  description: "Leading Manufacturer in Electrical and Panel Board Accessories",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
