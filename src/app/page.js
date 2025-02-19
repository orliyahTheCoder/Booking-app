import About from "@/components/About/About";
import Cards from "@/components/BookCards/Cards";
import Footer from "@/components/Footer/Footer";
import Global from "@/components/Global/Global";
import Hero from "@/components/Hero/Hero";
import Testimonial from "@/components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div >
    <Hero/>
    <Global/>
    <About/>
    <Cards/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}
