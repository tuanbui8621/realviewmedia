// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";

import { notFound } from "next/navigation";
import { locales } from "../../i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import CustomCursor from "@/components/ui/CustomCursor";
import FloatingContact from "@/components/FloatingContact";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),

    keywords: [
      "Google 360 Virtual Tours",
      "Google Business Profile",
      "360 Photography",
      "Virtual Tours Vietnam",
      "Commercial Photography",
      "Business Photography",
      "Visual Marketing",
      "RealView Media",
    ],

    metadataBase: new URL("https://www.rvmedia.vn"),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        vi: "/vi",
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.rvmedia.vn",
      siteName: "RealView Media",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/media.png",
          width: 1200,
          height: 630,
          alt: "RealView Media",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/media.png"],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RealView Media",
    url: "https://www.rvmedia.vn",
    logo: "https://www.rvmedia.vn/images/media.png",
    image: "https://www.rvmedia.vn/images/media.png",
    description:
      "Premium Visual Marketing, Google Business 360 Virtual Tours and Professional Photography.",
    areaServed: "Vietnam",
    serviceType: [
      "Google Business 360 Virtual Tours",
      "Commercial Photography",
      "Visual Marketing",
    ],
    sameAs: [
      "https://www.facebook.com/realviewmediavn/",
      "https://www.instagram.com/realviewmedia_vn/",
    ],
  };

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-rv-black text-rv-white overflow-x-hidden min-h-screen cursor-none`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomCursor />
          <FloatingContact />
          <LenisProvider>{children}</LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}