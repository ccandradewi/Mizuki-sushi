import Navbar from "../component/Navbar/navbar";
import About from "../component/About/about";
import Hero from "../component/Home/Hero/hero";
import Footer from "../component/Footer/footer";
function AboutPage() {
  return (
    <div>
      <Navbar />
      <Hero pageTitle={"About Us"} />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
