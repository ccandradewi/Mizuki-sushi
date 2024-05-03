import Footer from "../component/Footer/footer";
import Hero from "../component/Home/Hero/hero";
import Navbar from "../component/Navbar/navbar";
import Teamspg from "../component/Teams/teamspg";

function TeamsPage() {
  return (
    <div>
      <Navbar />
      <Hero pageTitle="Our Team" />
      <Teamspg />
      <Footer />
    </div>
  );
}

export default TeamsPage;
