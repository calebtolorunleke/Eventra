import { testimonials } from "../../data/testimonials";
import SliderImport from "react-slick";
import { LocationOn } from "@mui/icons-material";

const Slider = SliderImport.default || SliderImport;

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    // <section className="max-w-7xl mx-auto py-20 px-6">
    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6">
      {" "}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <p className="text-xl text-gray-600 mt-3">
          Trusted by Event Lovers Everywhere
        </p>
      </div>
      <div className="flex flex-col">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 h-full">
              <div className=" flex flex-col gap-6 p-8 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mx-4 rounded-xl mb-3">
                <div className="flex justify-start items-center gap-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />

                  <div>
                    <p className="text-xl font-bold text-black/80">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 italic">
                  “
                  {testimonial.content.length > 102
                    ? `${testimonial.content.slice(0, 102)}...`
                    : testimonial.content}
                  ”
                </p>

                <div className="border-t border-gray-200"></div>

                <div className="flex justify-between items-center">
                  <p>{"⭐".repeat(testimonial.rating)}</p>

                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <LocationOn sx={{ fontSize: 18 }} />
                    <span>{testimonial.location}</span>
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
