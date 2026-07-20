import manage1 from "../assets/images/fedrick.jpg";
import manage2 from "../assets/images/gold.jpg";
import manage3 from "../assets/images/busayo.jpg";
import eclipse from "../assets/images/EllipseTeam.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    image: manage1,
    name: "Busayo Abigael",
    role: "CEO / Event Manager",
  },
  {
    id: 2,
    image: manage2,
    name: "Fedrick Jasper",
    role: "Director",
  },
  {
    id: 3,
    image: manage3,
    name: "Gold Bridget",
    role: "Finance Manager",
  },
];

const MeetTeam = () => {
  return (
    <section className="bg-green-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Our team
          </span>

          <h2 className="mt-4 text-3xl font-bold text-green-950 sm:text-4xl">
            Meet the people behind our events
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            A passionate team committed to creating meaningful and memorable
            event experiences.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={teamMembers.length > 1}
          grabCursor
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="team-swiper pb-14"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="h-auto">
              <article className="group flex h-full flex-col items-center rounded-3xl border border-green-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
                  <img
                    src={eclipse}
                    alt=""
                    aria-hidden="true"
                    className="absolute -left-8 top-5 h-60 w-32 rotate-3 object-contain opacity-80"
                  />

                  <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-green-700">
                    {member.role}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeetTeam;