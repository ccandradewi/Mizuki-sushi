function Hero({ pageTitle }) {
  return (
    <section className="flex flex-col w-full md:w-full md:h-80 lg:h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed ">
      <div
        className="flex-1 flex items-center bg-cover lg:bg-cover"
        style={{
          backgroundImage:
            "url('https://media.cnn.com/api/v1/images/stellar/prod/210916135259-sushi-stock-restricted.jpg?q=w_3000,h_1630,x_0,y_0,c_fill')",
        }}
      >
        <div className="text-center mx-auto p-3 ">
          <h1 className=" text-3xl lg:text-6xl font-semibold">{pageTitle}</h1>
          <p className="font-light text-base lg:text-3xl mt-5">
            Welcome to Mizuki sushi restaurant! We are passionate about
            delivering exceptional dining experiences to our customers. Our
            commitment to quality, innovation, and customer satisfaction sets us
            apart.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
