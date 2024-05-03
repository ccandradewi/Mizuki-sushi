import { MEMBER } from "../../team.js";
import { CULTURE } from "./culture.jsx";
import "./about.css";
import { Link } from "react-router-dom";
import { MILESTONE } from "./milestone.js";
function About() {
  return (
    <>
      <div className="bg-black text-white">
        <section className="flex flex-col lg:mx-6 lg:tracking-widest">
          <h1 className="text-3xl font-bold text-center mb-2 pt-4 md:text-5xl md:mt-11">
            About us
          </h1>
          <p className=" text-justify m-4 lg:text-xl">
            {" "}
            Mizuki Sushi began its culinary odyssey in 2005 as a modest sushi
            bar in Jakarta. From our humble beginnings, we&apos;ve evolved into
            a renowned dining destination, revered for our commitment to
            excellence and innovation. What started with traditional sushi
            offerings has blossomed into a diverse menu showcasing the rich
            tapestry of Japanese cuisine, from delicate sashimi to hearty ramen
            bowls. Our success is not just measured by the dishes we serve but
            by the relationships we&apos;ve nurtured with our patrons and
            community. Every visit to Mizuki Sushi is an opportunity to embark
            on a culinary adventure, where passion and authenticity converge to
            create unforgettable dining experiences. Join us as we continue to
            push the boundaries of flavor and tradition, one dish at a time.
          </p>
        </section>
        <section className="flex flex-col gap-7">
          <h1 className="text-xl pt-5 font-bold text-center mb-2 lg:my-9 lg:text-5xl">
            Meet Our Founder: Chef Aiko Yamamoto
          </h1>
          <div className="flex flex-col items-center">
            <img
              className="lg:w-[600px]"
              src="https://cdn.tatlerasia.com/tatlerasia/i/2023/05/15101037-chef-okuda-is-the-chef-owner-at-his-restaurant-al-che-cciano-that-has-been-shining-the-spotlight-on-shonai-ingredients-2_cover_1182x666.jpg"
              alt="founder"
            />
            <p className="m-10 text-justify lg:text-xl lg:tracking-widest">
              Chef Aiko Yamamoto, the driving force behind Mizuki, is a true
              culinary luminary with a deep-rooted passion for Japanese cuisine.
              Hailing from Japan, Chef Yamamoto&apos;s journey in the culinary
              world began at a tender age, learning the art of sushi-making from
              her family. Inspired by a desire to share the authentic flavors of
              her heritage, Chef Yamamoto embarked on a quest to perfect her
              craft, traveling across Japan to learn from revered sushi masters.
              With an unwavering commitment to quality and innovation, Chef
              Yamamoto&apos;s vision for Mizuki Sushi was born—a haven where
              tradition meets contemporary culinary artistry. Today, her
              dedication to excellence shines through in every dish, creating
              unforgettable dining experiences for all who enter our doors.
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          <h1 className="text-3xl font-bold text-center my-8">Milestone</h1>
          <div className="overflow-x-scroll hide-scroll-bar mx-12 flex flex-row gap-6 items-center">
            {MILESTONE.map((milestone, index) => (
              <div
                className="block w-72 h-72 p-6 bg-black border border-gray-700 rounded-lg shadow text-center"
                key={index}
              >
                <div className="flex flex-col w-60 justify-center items-center">
                  <h2 className=" text-red-800 font-bold text-lg">
                    {milestone.year}
                  </h2>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className=" font-extrabold text-5xl text-center my-8">
            Our Teams
          </h1>
          <div className="overflow-x-scroll hide-scroll-bar gap-6 px-5 flex flex-row text-center md:mt-10 md:gap-9 lg:justify-center">
            {MEMBER.map((chef, index) => (
              <div
                className=" bg-black border border-gray-700 rounded-lg shadow"
                key={index}
              >
                <div className="flex flex-col mx-24 w-60 justify-center items-center">
                  <img
                    className="w-52 h-60 object-cover  md:w-72 md:h-96"
                    src={chef.image}
                  />
                  <div className="">
                    <h1 className="font-bold text-lg">{chef.name}</h1>
                    <p className=" text-red-500">{chef.title}</p>
                    <p>{chef.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-4">
            <Link to="/teams">
              <button className=" font-medium rounded-lg text-sm px-5 py-2.5 bg-red-800 text-white">
                See Other Member
              </button>
            </Link>
          </div>
        </section>
        <section className="mb-20">
          <h1 className=" font-extrabold text-3xl text-center my-8 tracking-widest">
            From Sea to Serenity: Embracing Our Culture
          </h1>
          <div className="overflow-x-scroll hide-scroll-bar gap-6 px-5 flex flex-row text-center md:mt-10 md:gap-9 md:justify-center">
            {CULTURE.map((cul, index) => (
              <div
                className=" bg-zinc-900 border border-gray-700 rounded-lg shadow"
                key={index}
              >
                <div className="flex flex-col w-60 mx-11 gap-4 m-2 justify-center items-center">
                  <div className="text text-5xl text-red-800">{cul.icon}</div>
                  <h1 className="font-bold text-lg">{cul.title}</h1>
                  <p>{cul.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
