import AboutH from "../../../assets/aboutH/aboutH.jpg";
import { MEMBER } from "../../../team";
import { Link, Link as ReactRouterLink } from "react-router-dom";
export default function Overview() {
  return (
    <div className="text-white bg-black">
      <div className=" flex flex-col gap-2 p-2 sm:flex-row sm:p-6 sm:gap-9 md:w-full ">
        <img
          className=" hidden w-full aspect-[4/3] object-cover lg:w-[500px] lg:block  "
          src={AboutH}
          alt="aboutH"
        />
        <div className=" flex flex-col  md:gap-10 lg:gap-20 lg:px-7">
          <h1 className=" text-3xl font-bold text-center md:text-5xl">
            About us
          </h1>
          <p className=" text-center md:text-2xl md:tracking-wider md:text-center lg:leading-10">
            {" "}
            Established in 2005, Mizuki Sushi began with a simple vision: to
            redefine sushi dining. Over the years, we&apos;ve expanded our menu
            to showcase a diverse range of Japanese specialties while staying
            true to our commitment to quality and creativity. Today, we&apos;re
            proud to stand as a symbol of culinary excellence, thanks to the
            support of our loyal customers and dedicated staff. Join us as we
            continue to innovate and delight taste buds, one dish at a time.
          </p>
        </div>
      </div>
      <div>
        <h1 className=" font-extrabold text-3xl text-center mb-4 md:text-5xl md:mt-11 ">
          Our Teams
        </h1>
        <div className="overflow-x-scroll hide-scroll-bar gap-3 px-5 flex flex-row text-center md:mt-10 md:gap-9 md:justify-center">
          {MEMBER.map((chef, index) => (
            <div
              className=" bg-zinc-900 border border-gray-700 rounded-md shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <div className="w-60 flex flex-col justify-center items-center">
                <img
                  className="w-52 h-60 object-cover md:w-72 md:h-96"
                  src={chef.image}
                  alt="member chef"
                />
                <div>
                  <h1 className="font-bold text-md">{chef.name}</h1>
                  <p>{chef.title}</p>
                </div>
                <Link as={ReactRouterLink} to="/about">
                  <button className=" text-red-300 mb-5">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-2 p-2 md:flex-row md:items-center md:mt-11">
        <div className=" md:w-1/2 md:relative md:left-8">
          <img
            className=" w-full aspect-[4/3] object-cover md:w-[400px] md:border-8 md:border-white lg:w-full lg:border-8 lg:border-white"
            src="https://cdn1-production-images-kly.akamaized.net/nWhTA3H4z_LhzO03xc83LFAqZY4=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2702918/original/001063400_1547374107-sushi-2853382_1920.jpg"
            alt="company culture"
          />
        </div>
        <div className="flex flex-col md:gap-10 md:w-1/2 lg:justify-center md:absolute md:right-12 lg: right-28 lg:gap-3">
          <div className="flex flex-col bg-red-800 p-5 md:p-0 md: gap-2 lg:gap-5">
            <h1 className=" text-3xl font-bold text-center md:text-3xl lg:text-5xl">
              Company Culture
            </h1>
            <p className="m-2 lg:text-xl lg:tracking-wider md:text-center lg:leading-8 ">
              Our sushi restaurant embodies a culture centered around excellence
              in every aspect of our operations. We are committed to delivering
              an unparalleled dining experience to our guests, starting from the
              moment they enter our establishment. Quality is our top priority,
              reflected in the meticulous sourcing of fresh, high-quality
              ingredients and the skilled craftsmanship of our chefs.{" "}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <br />
    </div>
  );
}
