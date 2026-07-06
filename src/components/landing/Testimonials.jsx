import { testimonials } from "../../data/testimonials";
import SliderImport from "react-slick";
import { LocationOn } from "@mui/icons-material";

const Slider = SliderImport.default || SliderImport;

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    slidesToShow: 1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    // <section className="max-w-7xl mx-auto py-20 px-6">
    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden ">
      {" "}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Testimonials</h1>
        <p className="text-base md:text-xl text-gray-600 mt-3">
          Trusted by Event Lovers Everywhere
        </p>
      </div>
      <div className="flex flex-col overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <div className="min-h-[340px] flex flex-col gap-6 p-6 md:p-8 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl mb-6">
                <div className="flex items-center gap-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-100 shrink-0"
                  />

                  <div className="min-w-0">
                    <p className="text-lg md:text-xl font-bold text-black/80 truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 italic line-clamp-4 flex-1">
                  “{testimonial.content}”
                </p>

                <div className="border-t border-gray-200"></div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <p className="whitespace-nowrap">
                    {"⭐".repeat(testimonial.rating)}
                  </p>

                  <div className="flex items-center gap-1 text-gray-500 text-sm min-w-0">
                    <LocationOn sx={{ fontSize: 18 }} />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
