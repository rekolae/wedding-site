import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: "E&A häät 2023",
  description: "E&A häiden omat verkkosivut"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-forest-green dark:bg-dark-blueish-gray text-black antialiased dark:text-white">
        <Navigation />
        <main
          id="main-content"
          className="mx-auto my-3 flex max-w-3xl border border-dotted border-red-500 blur-none transition duration-500"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
