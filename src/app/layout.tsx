import type { Metadata } from "next";
import "./globals.css";
import FlowManager from "@/components/FlowState/FlowManager";

export const metadata: Metadata = {
  title: "Jazz Harmony | Major Thirds Tuning",
  description: "Interactive platform for studying Jazz and Bossa Nova harmony on guitar using Major Thirds tuning",
};

import AuthProvider from "@/components/Auth/AuthProvider";
import Navbar from "@/components/Layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AuthProvider>
          <Navbar />

          {/* Main content with top padding for fixed nav */}
          <main className="pt-20 min-h-screen">
            {children}
          </main>

          <FlowManager />

          {/* Footer */}
          <footer className="border-t border-surface-light py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-gray-500 text-sm">
                Jazz Harmony Platform • Major Thirds Tuning Reference
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Chord progressions for educational purposes only
              </p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
