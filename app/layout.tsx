import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";

// Import Premium Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "RealView Media | Premium Visual Marketing & 360 Tours",
  description: "Google Business 360 Virtual Tours, Professional Photography, and Digital Media Marketing that attract more customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Note the cursor-none class here to hide the default Windows mouse */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-rv-black text-rv-white overflow-x-hidden cursor-none`}>
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}