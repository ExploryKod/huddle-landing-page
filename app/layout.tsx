import { Poppins, Open_Sans } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@modules/app/react/ThemeProvider";
import { Header } from "@modules/app/react/layout/Header";
import { Footer } from "@modules/app/react/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-poppins",
  adjustFontFallback: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-open-sans",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Huddle - Build The Community Your Fans Will Love",
  description:
    "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} overflow-x-hidden antialiased`}
      suppressHydrationWarning
    >
      <body className={openSans.className} suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <div className="relative min-h-screen w-full mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
