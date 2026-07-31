import "./index.css";
import "./App.css";

import Navbar          from "./components/Navbar";
import HeroAbout       from "./components/HeroAbout";
import Skills          from "./components/Skills";
import Projects        from "./components/Projects";
import Achievements    from "./components/Achievements";
import Research        from "./components/Research";
import OpenSource      from "./components/OpenSource";
import GitHubActivity  from "./components/GitHubActivity";
import Contact         from "./components/Contact";

function App() {
  return (
    <>
      {/* Dot-grid background — fixed, behind everything */}
      <div className="dot-grid" />

      {/* Navbar — fixed at top */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero + About merged */}
        <HeroAbout />

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects */}
        <Projects />

        {/* Achievements */}
        <Achievements />

        {/* Thin divider */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: "#1a1a1a" }} />
        </div>

        {/* Research */}
        <section id="experience">
          <Research />
        </section>

        {/* Open Source */}
        <OpenSource />

        {/* GitHub Activity */}
        <GitHubActivity />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}

export default App;