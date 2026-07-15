// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";

import { notFound } from 'next/navigation';
import { locales } from '../../i18n'; 
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import CustomCursor from "@/components/ui/CustomCursor";
import FloatingContact from "@/components/FloatingContact";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "RealView Media | Premium Visual Marketing & 360 Tours",
  description: "Google Business 360 Virtual Tours, Professional Photography, and Digital Media Marketing.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Load messages explicitly
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-rv-black text-rv-white overflow-x-hidden min-h-screen cursor-none`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomCursor />
          <FloatingContact />
          <LenisProvider>
            {children}
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}