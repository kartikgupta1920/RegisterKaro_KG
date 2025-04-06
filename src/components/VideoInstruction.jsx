import bulb from '../assets/bulb.svg';
import growth from '../assets/growth.svg';
import ytimg from '../assets/ytimg.png';

function VideoInstruction() {
  return (
    <section className="bg-[#1C4670] py-16">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Video Introductions
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </p>

            <ul className="space-y-10">
              <FeatureItem
                icon={bulb}
                title="Explore ideas together"
                description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
              />
              <FeatureItem
                icon={growth}
                title="Bring those ideas to life"
                description="Engage audience segments and finally create actionable insights. Amplify vertical integration."
              />
            </ul>
          </div>

          {/* Right Video Thumbnail */}
          <div className="md:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img src={ytimg} alt="Video thumbnail" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for features
const FeatureItem = ({ icon, title, description }) => (
  <li className="flex items-start gap-4">
    <img src={icon} alt="" className="w-12 h-12" />
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  </li>
);

export default VideoInstruction;
