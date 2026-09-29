import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";
import Platform from "./components/platform/Platform";
import AIInsights from "./components/ai-insights/AIInsights";
import GettingStarted from "./components/getting-started/GettingStarted";
import FinalCTA from "./components/final-cta/FinalCTA";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/navigation/BackToTop";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--color-page)]">
        <Hero />
        <Platform />
        <AIInsights />
        <GettingStarted />
        <FinalCTA />

        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default App;
