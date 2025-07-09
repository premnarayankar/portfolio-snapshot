import "./globals.css";

export const metadata = {
  title: "Portfolio Snapshot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
