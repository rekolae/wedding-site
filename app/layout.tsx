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
      <body className="bg-forest-green dark:bg-dark-blueish-gray min-w-[400px] text-black antialiased dark:text-white">
        <Navigation />
        <main
          id="main-content"
          className="mx-auto my-1 flex max-w-3xl blur-none transition duration-500"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
