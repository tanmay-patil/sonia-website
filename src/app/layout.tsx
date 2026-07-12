import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.scss';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { SkipLink } from '@/components/ui/SkipLink';
import { content } from '@/data/content';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: content.global.seo.title,
  description: content.global.seo.description,
};

// Inline script to prevent flash of wrong theme before React hydrates
const themeScript = `
  (function() {
    try {
      var localTheme = window.localStorage.getItem('theme');
      var theme = localTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for theme initialization before hydration */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${dmSans.variable} ${inter.variable}`}>
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
