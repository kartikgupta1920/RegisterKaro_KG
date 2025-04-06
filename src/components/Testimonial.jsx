import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at Acme Corp",
    message: "RegisterKaro made my company registration seamless. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Sharma",
    title: "Entrepreneur",
    message: "RegisterKaro made things super simple for my new business. I was really struggling with legal jargon and procedures, but their team was so helpful throughout. Highly recommend them to every founder.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "David Lin",
    title: "Tech Lead",
    message: "Straightforward process and very communicative team. Loved it!",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Sofia Nguyen",
    title: "Consultant",
    message: "They were with me every step of the way. Extremely supportive!",
    avatar: "https://randomuser.me/api/portraits/women/80.jpg"
  },
  {
    name: "Liam O’Connor",
    title: "Founder, BoldTech",
    message: "Amazing experience! Would highly recommend RegisterKaro. From the first contact to completion, everything was smooth, professional, and incredibly fast. They truly understand founders’ pain points.",
    avatar: "https://randomuser.me/api/portraits/men/99.jpg"
  },
  // Add more testimonials...
];

export default function TestimonialsCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setActiveTestimonial(testimonial);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveTestimonial(null);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 rounded-xl p-8 max-w-3xl mx-auto text-center shadow-xl">
                <div className="flex justify-center mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-orange-500"
                  />
                </div>
                <p className="text-lg italic text-gray-300 mb-4 line-clamp-3">
                  “{item.message.length > 150
                    ? item.message.slice(0, 150) + '...'
                    : item.message}”
                </p>
                {item.message.length > 150 && (
                  <button
                    onClick={() => openModal(item)}
                    className="text-orange-400 font-semibold text-sm hover:underline"
                  >
                    Read More
                  </button>
                )}
                <h4 className="text-xl font-semibold mt-4">{item.name}</h4>
                <p className="text-sm text-orange-400">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for Full Testimonial */}
      <Dialog open={isOpen} onClose={closeModal} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="relative bg-white text-black rounded-lg max-w-md w-full p-6 z-50">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>

            {activeTestimonial && (
              <>
                <div className="flex justify-center mb-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-orange-500"
                  />
                </div>
                <Dialog.Title className="text-lg font-semibold text-center">
                  {activeTestimonial.name}
                </Dialog.Title>
                <p className="text-sm text-center text-orange-500 mb-4">{activeTestimonial.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{activeTestimonial.message}”
                </p>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
