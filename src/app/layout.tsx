import type { Metadata } from "next";
import Script from "next/script";

import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Heeader } from "@/components/header";
import { Footer } from "@/components/footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PT Baja Titian Utama | Konstruksi Jembatan",
    template: "%s | PT Baja Titian Utama",
  },
  description:
    "PT Baja Titian Utama, didirakan 2018 sebagai bagian dari PT Bukaka Teknik Utama. Berkolaborasi dengan pemerintah untuk membangun jembatan di Indonesia. Dengan konsesi selama 12 tahun, ratusan jembatan telah dibangun.",
  applicationName: "PT Baja Titian Utama",
  authors: [
    {
      url: "https://www.bukaka.com/",
      name: "PT Bukaka Teknik Utama Tbk",
    },
    {
      url: "https://ptbtu.com/",
      name: "PT Baja Titian Utama",
    },
    {
      url: "condro.me",
      name: "Condro Wiyono",
    },
  ],
  generator: "PT Baja Titian Utama",
  keywords: [
    "PT Baja Titian Utama",
    "PT Bukaka Teknik Utama Tbk",
    "PT Bukaka Teknik Utama",
    "terbaik di indonesia",
    "proyek jembatan",
    "pembuatan jembatan",
    "jembatan jawa",
    "konstruksi",
    "kerjasama pemerintah",
    "baja handal",
    "konstruksi handal",
    "infrastruktur negara",
    "kementrian pekerjaan umum",
    "pupr",
    "jembatan di pulau jawa",
    "pt btu",
    "btu",
  ],
  referrer: "origin",
  creator: "Condro Wiyono",
  publisher: "PT Baja Titian Utama",
  // TODO: Add more metadata
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "PT Baja Titian Utama",
    description:
      "PT Baja Titian Utama, yang didirikan pada tahun 2018 sebagai bagian dari PT Bukaka Teknik Utama, berkolaborasi dengan pemerintah untuk menciptakan dan merawat jembatan di seluruh Indonesia, terutama di Jawa. Dengan konsesi selama 12 tahun (2 tahun konstruksi dan 10 tahun pemeliharaan), ratusan jembatan telah dibangun dan dirawat oleh perusahaan kami. Kami bangga menjadi terbaik di Indonesia dalam proyek jembatan, pembuatan jembatan, dan konstruksi handal. Kerjasama dengan pemerintah dan keahlian dalam penggunaan baja yang handal menjadikan kami mitra yang andal dalam membangun masa depan infrastruktur negara.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M7174VN4ZB"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M7174VN4ZB');
          `}
        </Script>
        <Script
          strategy="beforeInteractive"
          id="my-ldjson-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PT Baja Titian Utama",
        "legalName": "PT Baja Titian Utama",
        "url": "https://ptbtu.com",
        "foundingDate": "2018",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ITS Tower, Nifarro Park Jalan Raya Pasar Minggu",
          "addressLocality": "Jakarta Selatan",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12560",
          "addressCountry": "ID"
        }
      }
      `,
          }}
        />
      </head>
      <body className={cn(font.className)}>
        <Heeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
