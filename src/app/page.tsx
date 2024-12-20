import Image from "next/image";
import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>

      <Header />
      <Hero />
      <Dashboard />
      <Features />
      <Gallery />
      <Partners />
      <Testimonials />
      <Footer />

    </div>
  );
}



// #040828