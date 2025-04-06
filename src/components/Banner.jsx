import { FaStar, FaPlayCircle } from "react-icons/fa";
import client from '../assets/client.svg';
import hand from '../assets/hand.svg';
import box from '../assets/box.svg';
import bannerImg from '../assets/banner-image.png';

function Banner() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex items-center gap-1 text-yellow-400 mb-3">
            <FaStar />
            <span className="text-white font-bold">Google Rating</span>
            {[...Array(4)].map((_, i) => <FaStar key={i} />)}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Your trusted partner <br />
            <span className="text-orange-400">for compliance business needs</span>
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and legal matters.
          </p>

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-3">
              <img src={box} alt="Rating" className="w-8" />
              <div>
                <h2 className="text-xl font-bold">4.5+</h2>
                <p className="text-gray-400">Customer Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={client} alt="Clients" className="w-8" />
              <div>
                <h2 className="text-xl font-bold">20,000+</h2>
                <p className="text-gray-400">Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={hand} alt="Stability" className="w-8" />
              <div>
                <h2 className="text-xl font-bold">99.8%</h2>
                <p className="text-gray-400">Financial Stability</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-white font-semibold shadow-lg">
              Talk to an Expert
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400 transition">
              <FaPlayCircle className="text-2xl" />
              <span className="font-medium">See how it works</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative z-10">
            <img src={bannerImg} alt="Banner" className="rounded-3xl shadow-lg w-full" />
          </div>
          <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-orange-500 rounded-full opacity-30 blur-3xl z-0"></div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4 pr-2">
        {["Annual Compliance", "Payroll Services", "Company Formation"].map((label, idx) => (
          <button key={idx} className="bg-white text-gray-800 hover:bg-orange-100 px-4 py-2 rounded-l-md shadow-md text-sm font-semibold transition">
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Banner;
