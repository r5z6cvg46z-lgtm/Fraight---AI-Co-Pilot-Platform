import "./globals.css";

export const metadata = {
  title: "Fraight Command Center",
  description: "AI Co-Pilot for Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05090F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
