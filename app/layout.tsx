import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTransitionProvider from "@/components/transition/PageTransitionProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import GlobalAppProvider from "@/context/GlobalAppProvider";
import SiteIntroV0 from "@/components/intro/SiteIntroV0"; 

const mwPoppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },

    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "../public/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Poppins-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--mw-font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mwungano Consultancy",
  description: "MWUNGANO is a pan-African entrepreneurial consultancy specializing in strategic brand, communications and public relations, market entry as well as ESG communications philanthropy consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={`${mwPoppins.variable} antialiased`}>
        <StyledComponentsRegistry>
          <GlobalAppProvider>
            <SiteIntroV0 />
            <PageTransitionProvider
            header={<Header />}
            footer={<Footer />}
          >
            <main id="page-slot" style={{ flex: 1, width: "100%", margin: "0 auto" }}>
              {children}
            </main>
            </PageTransitionProvider>
          </GlobalAppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
