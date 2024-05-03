import Footer from "../component/Footer/footer";
import Hero from "../component/Home/Hero/hero";
import Navbar from "../component/Navbar/navbar";
import ProductsDetail from "../component/Products/productsDetail";

function ProductsPage() {
  return (
    <div>
      <Navbar />
      <Hero pageTitle="Our Product" />
      <ProductsDetail />
      <Footer />
    </div>
  );
}

export default ProductsPage;
