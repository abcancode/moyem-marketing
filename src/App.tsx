import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import GettingStarted from "./components/getting-started/GettingStarted";
import FinalCTA from "./components/final-cta/FinalCTA";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--color-page)]">
        <Hero />
        <Features />
        <GettingStarted />
        <FinalCTA />
      </main>
    </>
  );
}

export default App;
