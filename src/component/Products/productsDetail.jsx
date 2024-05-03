import { FaStar } from "react-icons/fa6";
import { PRODUCT_MENU } from "../../product-menu";
import { useState } from "react";
function ProductsDetail() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }
  const buttonCategory = () => {
    const data = PRODUCT_MENU.map((item) => item.kategori);
    let newListButton = [];
    newListButton.push("All");
    for (const item of data) {
      if (!newListButton.includes(item)) newListButton.push(item);
    }
    return newListButton.map((category, idx) => (
      <button
        key={idx}
        className={`w-52 ${
          category == selectedCategory
            ? "bg-white text-black"
            : "bg-red-800 text-white"
        } hover:bg-zinc-900 hover:text-white text-black font-bold py-2 px-4 rounded-full`}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ));
  };

  const renderMenu = () => {
    let contentMenu;
    if (selectedCategory == "All") {
      contentMenu = PRODUCT_MENU;
    } else {
      contentMenu = PRODUCT_MENU.filter(
        (item) => item.kategori == selectedCategory
      );
    }
    return contentMenu.map((sushi, index) => (
      <div className=" bg-zinc-900 text-white rounded shadow-lg " key={index}>
        <div className="flex flex-col items-center text-center ">
          <div className="flex ">
            <img
              className=" object-cover w-32 h-32 md:w-52 md:h-52"
              src={sushi.imageSource}
            />
          </div>
          <div className="flex flex-col m-3">
            <h2 className=" font-bold text-base md:text-xl mt-2 mb-2">
              {sushi.name}
            </h2>
            <p className="text-xs lg:text-lg">{sushi.description}</p>
            <div className="flex justify-center my-2">
              <p className="text-white bg-red-700 w-6 text-xs md:text-base md:w-12">
                {sushi.price}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col bg-zinc-900 items-center gap-1">
              <div className="flex flex-row">{stars}</div>
              <p className="text-xs lg:text-lg">{sushi.review}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center m-8">
        Our Menu
      </h1>
      <div className="flex flex-col gap-2 items-center lg:flex-row lg:justify-center lg:m-5">
        {buttonCategory()}
      </div>
      <section className="grid grid-cols-2 gap-4 m-8 md:grid-cols-4">
        {renderMenu()}
      </section>
    </>
  );
}

export default ProductsDetail;
