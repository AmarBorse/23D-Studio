import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Motion from "@/components/Motion";

export const metadata = {
  metadataBase: new URL("https://23dstudio.com"),
  title: { default: "23D Studio | Design studio in Nashik", template: "%s | 23D Studio" },
  description:
    "23D Studio is a multidisciplinary design studio in Nashik for architectural visualization, product visualization, exhibition design, branding and marketing.",
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "23D Studio",
    description: "Blending creative vision with innovative thinking.",
    images: ["/media/showreel-poster.jpg"],
    type: "website",
  },
};

export const viewport = { themeColor: "#eceae5" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "23D Studio",
              url: "https://23dstudio.com",
              logo: "https://23dstudio.com/logo.png",
              email: "23dstudiodesign@gmail.com",
              telephone: "+91 76207 03298",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No. 1, Sahnivas Co-op. Society, Sharanpur Road",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                postalCode: "422005",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/23dstudio__/",
                "https://www.linkedin.com/company/23dstudio/",
                "https://www.behance.net/23dstudio_",
                "https://www.youtube.com/@23D.DesignStudio",
              ],
            }),
          }}
        />
        <div className="progress" aria-hidden="true" />
        <Cursor />
        <Motion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
