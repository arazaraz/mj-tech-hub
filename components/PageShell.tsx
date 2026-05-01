import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
