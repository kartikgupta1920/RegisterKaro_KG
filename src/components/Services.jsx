import SingleService from "./SingleService";
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';

const serviceData = [
  {
    imgUrl: icon1,
    desc: "Build web-based solutions that enhance customer experience.",
    title: "Company Formation",
    url: "#",
    border: ""
  },
  {
    imgUrl: icon2,
    desc: "Make data-driven decisions and utilize technology to reach business goals.",
    title: "Company Secretarial Services",
    url: "#",
    border: "lg:border-x"
  },
  {
    imgUrl: icon3,
    desc: "Foster customer relationships by effectively serving your market.",
    title: "Virtual Office Address",
    url: "#",
    border: ""
  },
  {
    imgUrl: icon4,
    desc: "Turn your ideas into modern products with our design experts.",
    title: "Annual Compliance Services",
    url: "#",
    border: ""
  },
  {
    imgUrl: icon5,
    desc: "Expand your business across the globe with minimal effort.",
    title: "Payroll Services",
    url: "#",
    border: "lg:border-x"
  },
  {
    imgUrl: icon6,
    desc: "Steering user behaviours with creative design, data insights & technology.",
    title: "Bookkeeping Services",
    url: "#",
    border: ""
  }
];

function Services() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* <h3 className="text-orange-500 text-lg tracking-widest uppercase">Welcome to Registerkaro.in</h3> */}
          <h1 className="text-4xl lg:text-5xl font-bold mt-2">We Provide</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((data, i) => (
            <div
              key={i}
              className={`bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-orange-500 transition-all duration-300 ${data.border}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img src={data.imgUrl} alt={data.title} className="h-16 w-16 animate-bounce text-orange-500" />
                <h2 className="text-xl font-semibold text-orange-400">{data.title}</h2>
                <p className="text-sm text-gray-300">{data.desc}</p>
                <a href={data.url} className="text-sm text-orange-300 hover:underline mt-2">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white text-md py-3 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
