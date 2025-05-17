// src/app/layout.tsx

// additional import
import { Providers } from "@/provider";
import { GeistSans, GeistMono } from 'geist/font'

// other code in the file ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}