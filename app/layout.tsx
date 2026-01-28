import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/ui/navbar";
import NextTopLoader from "nextjs-toploader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NyxhoraUI - Modern UI Components for Next.js",
    template: "%s | NyxhoraUI",
  },
  metadataBase: new URL("https://nyxhoraui.com"),
  description: "A collection of beautifully designed, accessible, and customizable React UI components built with Tailwind CSS and Framer Motion. Build premium web experiences with ease.",
  keywords: ["Next.js", "React", "Tailwind CSS", "UI Components", "Library", "Design System", "Framer Motion", "Accessible"],
  authors: [{ name: "Nyxhora Team" }],
  creator: "Nyxhora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyxhoraui.com",
    title: "NyxhoraUI - Build Premium Web Experiences",
    description: "Copy-paste UI components for Next.js. Beautiful, reusable, and built with Tailwind CSS.",
    siteName: "NyxhoraUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NyxhoraUI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NyxhoraUI - Build Premium Web Experiences",
    description: "Copy-paste UI components for Next.js. Beautiful, reusable, and built with Tailwind CSS.",
    creator: "@nyxhora",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NyxhoraUI",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "description": "A comprehensive UI component library for Next.js and Tailwind CSS.",
              "author": {
                "@type": "Organization",
                "name": "Nyxhora Team",
                "url": "https://nyxhoraui.com"
              }
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2563eb"
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2563eb,0 0 5px #2563eb"
            zIndex={99999}
          />
          <Navbar />
          <main className="flex-1 pt-16 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
