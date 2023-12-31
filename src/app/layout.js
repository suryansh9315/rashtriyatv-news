import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "राष्ट्रीय टीवी",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F4F4F4]">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Responsive ----- news + admin
// Social Media Links ---- news

// Optional
// Secure Blog Editor with DOMPurify ---- admin
// Improve Logic for video carousel in admin
// Improve UI/UX
