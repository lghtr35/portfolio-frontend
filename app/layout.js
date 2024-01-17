import { Footer } from "@/components/complex/footer/Footer";
import { Navbar } from "@/components/complex/navbar/Navbar";
import { colors } from "@/helpers/conf";
import "./globals.css";

export const metadata = {
  title: "Serdil Cagin Cakmak",
  description: "A site where you can access my projects and resume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ color: colors.text }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
