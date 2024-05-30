import "@fontsource/bai-jamjuree/400.css";
import "@fontsource/bai-jamjuree/600.css";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Access from "./components/access/Access";
import Workflow from "./components/workflow/Workflow";
import Companies from "./components/companies/Companies";
import CTA from "./components/cta/CTA";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <main className="main-content">
      <Hero />
      <Features />
      <Access />
      <Workflow />
      <Companies />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
