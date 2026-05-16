import './globals.css';

export const metadata = {
  title: 'JG University',
  description: 'Explore programs, admissions, and campus life at JG University.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
