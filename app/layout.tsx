import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: ["/favicon.png?v=4"],
    apple: ["favicon.pngv=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="author" content="Vinícius de Alencar Freire" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GPS Transfer, tenha um carro a sua espera." />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta
        property="og:description"
        content="Transfer privativo para os principais destinos de Porto Seguro: Trancoso, Arraial d'Ajuda, Club Med, Caraíva, entre outros destinos."
      />
      <meta property="og:image" content="https://i.imgur.com/VyyElng.png" />
      <meta property="og:url" content="https://gpstransfer.com.br" />
      <link rel="icon" href="favicon.png" sizes="any" />
      <title>GPS Transfer, terra um carro sua espera</title>
      <body className={inter.className}>{children} </body>
      <GoogleTagManager gtmId="GTM-5ZL5QX3" />
    </html>
  );
}
