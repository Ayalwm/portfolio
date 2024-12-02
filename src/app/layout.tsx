// src/app/layout.tsx
import './globals.css'; // Apply global Tailwind styles
import Navbar from './component/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-gray-900"> <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
      <body className="bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="min-h-screen bg-inherit">{children}</main>
      </body>
    </html>
  );
}
