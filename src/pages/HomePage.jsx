import Navbar from "../component/Navbar/navbar.jsx";
import Hero from "../component/Home/Hero/hero.jsx";
import Product from "../component/Home/Products/products.jsx";
import Testimonial from "../component/Home/Testimonial/Testimonial.jsx";
import Footer from "../component/Footer/footer.jsx";
import Overview from "../component/Home/Overview/overview.jsx";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero pageTitle="Mizuki Sushi" />
      <Overview />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
