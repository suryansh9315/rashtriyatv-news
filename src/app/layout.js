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

// Single News Page ---- news
// Route to single News Article  ---- news    
// Youtube Carousel ---- backend + admin
// Tags change ---- backend + admin
// Recent News Article ---- backend
// Responsive ----- news + admin
// Search box ---- news
// Social Media Links ---- news

