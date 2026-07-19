import discoverImg from "../../assets/images/landingPageBg.jpg";

const DiscoverEvents = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div
        className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${discoverImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Discover Events That Match Your World
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-200 leading-8">
            Step into a space where every moment counts. From live concerts and
            comedy nights to art showcases, discover unforgettable experiences
            tailored to your interests.
          </p>

          <button className="mt-8 bg-green-900 hover:bg-green-800 transition-all cursor-pointer duration-300 text-white font-semibold px-8 md:px-14 py-4 rounded-xl shadow-lg">
            Discover Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverEvents;