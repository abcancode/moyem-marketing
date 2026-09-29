import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <Hero />
      </main>
    </>
  );
}

export default App;
