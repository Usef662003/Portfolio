import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
