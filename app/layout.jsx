import localFont from "next/font/local";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "@/components/ThemeProvider";


const jetbrainsMono = localFont({
  src: [
    {
      path: '../public/assets/fonts/JetBrainsMono-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/JetBrainsMono-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-jetbrainsMono',
  display: 'swap',
});

export const metadata = {
  title: "Citiz Portfolio Site",
  description: "Full-Stack Developer Portfolio - Citiz Shrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-primary`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header/>
          <StairTransition/>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
