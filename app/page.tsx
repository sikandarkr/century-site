import Image from "next/image";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Products from './components/Products';
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Features/>
      <Products/>
      <Footer/>
    </main>
  );
}

