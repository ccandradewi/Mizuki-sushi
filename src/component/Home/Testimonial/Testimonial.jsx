import { FaStar } from "react-icons/fa6";
import { TESTIMONIALS } from "./testimonial";
function Testimonial() {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }
  return (
    <div className="text-white bg-black">
      <h1 className=" font-extrabold  text-3xl text-center pt-3 mb-4 md:text-5xl md:mt-11 ">
        {" "}
        TESTIMONIALS
      </h1>
      <div className="flex flex-col gap-3 md:flex-row md:px-4 lg:flex-row lg:px-4 lg:py-10 lg:mb-10">
        {TESTIMONIALS.map((testi, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-1 m-1">
                <img
                  className=" w-14 h-14 rounded-full mr-4 object-cover"
                  src={testi.image}
                  alt="photo reviewer"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold text-md">{testi.name}</h2>
                  <p>{testi.title}</p>
                  <div className=" flex flex-row">{stars}</div>
                </div>
              </div>
              <div>
                <p className=" text-justify m-2">{testi.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
