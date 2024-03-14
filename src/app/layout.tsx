import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Heeader } from "@/components/header";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PT Baja Titian Utama",
    template: "%s | PT Baja Titian Utama",
  },
  description:
    "PT Baja Titian Utama, yang didirikan pada tahun 2018 sebagai bagian dari PT Bukaka Teknik Utama, berkolaborasi dengan pemerintah untuk menciptakan dan merawat jembatan di seluruh Indonesia, terutama di Jawa. Dengan konsesi selama 12 tahun (2 tahun konstruksi dan 10 tahun pemeliharaan), ratusan jembatan telah dibangun dan dirawat oleh perusahaan kami. Kami bangga menjadi terbaik di Indonesia dalam proyek jembatan, pembuatan jembatan, dan konstruksi handal. Kerjasama dengan pemerintah dan keahlian dalam penggunaan baja yang handal menjadikan kami mitra yang andal dalam membangun masa depan infrastruktur negara.",
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
  ],
  referrer: "origin",
  viewport: "width=device-width, initial-scale=1.0",
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
    <html lang="en" className="scroll-smooth">
      <body className={cn(font.className)}>
        <Heeader />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
