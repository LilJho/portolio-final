import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Herosection />
      <Aboutme />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
