import "@fontsource/bai-jamjuree/400.css";
import "@fontsource/bai-jamjuree/600.css";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Access from "./components/access/Access";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Access />
    </>
  );
}

export default App;
