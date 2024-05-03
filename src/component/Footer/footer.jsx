import { BsFillTelephoneFill } from "react-icons/bs";
import Logo from "../../assets/nav/Mizuki.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div>
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="flex flex-col gap-3 w-full lg:w-6/12 px-4">
            <div className="flex items-center">
              <img className=" w-10" src={Logo} alt="logo" />
              <h1 className="text-3xl font-bold">Mizuki Sushi</h1>
            </div>
            <h5 className="text-lg mt-0 mb-2">
              123 Sakura Blossom Street, Sushiville District, Sushitown, East
              Jakarta, Jakarta Special Capital Region 12345, Indonesia
            </h5>
            <div className="flex flex-row items-center gap-1">
              <BsFillTelephoneFill />: +62 123 456 7890
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 ml-auto">
                <span className="block uppercase text-sm font-bold mb-2">
                  Company
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/products"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      to="/teams"
                    >
                      Teams
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © 2024 Mizuki Sushi Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
