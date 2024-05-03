import { TYPE_PRODUCT } from "./products";
import { Link } from "react-router-dom";
function Product() {
  return (
    <>
      <div className=" bg-black text-white p-">
        <h1 className=" font-extrabold text-3xl text-center mb-4 md:text-5xl md:mt-11">
          Our Products
        </h1>
        <div className=" flex flex-row gap-1 text-center overflow-x-scroll hide-scroll-bar md:mt-10 md:gap-9 lg:justify-center">
          {TYPE_PRODUCT.map((type, index) => (
            <div className="flex h-full w-full justify-center px-4" key={index}>
              <div className="flex flex-col w-60 justify-center items-center">
                <img
                  className="object-cover w-full h-52 sm:w-64 sm:h-52 lg:w-full"
                  src={type.Image}
                />
                <div className=" m-5">
                  <h1 className=" font-bold text-xl mb-2">{type.name}</h1>
                  <p>{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            className="text-white bg-red-800 hover:bg-white hover:text-black font-medium rounded-lg text-base text-center px-5 py-2.5 w-44"
            to="/products"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
