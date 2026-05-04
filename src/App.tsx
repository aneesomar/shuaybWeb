import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { addNavigationListener, getCurrentPath } from "./utils/navigation";
import { applySeo } from "./utils/seo";
import { useEffect, useState } from "react";

function CurrentPage() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => addNavigationListener(() => setPath(getCurrentPath())), []);
  useEffect(() => applySeo(path), [path]);

  if (path === "/about-us") {
    return <About />;
  }

  if (path === "/testimonials") {
    return <Testimonials />;
  }

  if (path === "/contact-us") {
    return <Contact />;
  }

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CurrentPage />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
