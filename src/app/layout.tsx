import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Primeiro Ato",
    template: "%s | Primeiro Ato",
  },
  description: "Agência de Marketing: sites, tráfego pago, identidade visual, social media e conteúdo com foco em performance.",
  keywords: [
    "agência de marketing",
    "criação de sites",
    "tráfego pago",
    "identidade visual",
    "social media",
    "videomaker",
    "marketing digital",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Primeiro Ato",
    title: "Primeiro Ato",
    description:
      "Agência de Marketing: sites, tráfego pago, identidade visual, social media e conteúdo com foco em performance.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Primeiro Ato" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primeiro Ato",
    description:
      "Agência de Marketing: sites, tráfego pago, identidade visual, social media e conteúdo com foco em performance.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Primeiro Ato",
              url: SITE_URL,
              logo: `${SITE_URL}/og-default.png`,
              sameAs: [
                // Adicione redes sociais quando disponível
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Primeiro Ato",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
