import "@fontsource/bai-jamjuree/400.css";
import "@fontsource/bai-jamjuree/600.css";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Access from "./components/access/Access";
import Workflow from "./components/workflow/Workflow";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Access />
      <Workflow />
    </>
  );
}

export default App;
