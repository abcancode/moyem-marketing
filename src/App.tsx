import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--color-page)]">
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default App;
