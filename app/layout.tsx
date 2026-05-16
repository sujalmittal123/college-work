import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'JG University',
    template: '%s | JG University',
  },
  description:
    'JG University is a tech-driven university in Ahmedabad, Gujarat, offering future-ready programs across management, commerce, computing, engineering, law, and science.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
