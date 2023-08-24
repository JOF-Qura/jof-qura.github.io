import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <TechStack />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
