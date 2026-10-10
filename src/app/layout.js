import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: "CoolAir Pro - AC Sales, Repair & Services",
  description: "Buy top brand ACs and book expert doorstep maintenance services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light text-dark d-flex flex-column min-vh-100">
        <TopBar />
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}