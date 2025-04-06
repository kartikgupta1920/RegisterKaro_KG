import tick from '../assets/tick.svg';
import clock from '../assets/clock.svg';
import sync from '../assets/sync.svg';
import verified from '../assets/verified.svg';
import service from '../assets/service.svg';
import expert from '../assets/expert.svg';
import WhyusBox from './WhyusBox';

function Whyus() {
    return (
        <section className="bg-[#1B1E28] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-12">
              <h2 className="text-orange-500 text-4xl font-bold mb-4">WHY CHOOSE US</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Our all-in-one platform and team of experts will help direct you in the right path and ensure your business starts the right way in record time.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WhyusBox title="Affordable" svg={tick} color="bg-green-500" />
              <WhyusBox title="Compliance Ensured" svg={verified} color="bg-blue-500" />
              <WhyusBox title="Simplified Process" svg={sync} color="bg-purple-500" />
              <WhyusBox title="On-time Service" svg={clock} color="bg-yellow-500" />
              <WhyusBox title="Instant Response" svg={service} color="bg-pink-500" />
              <WhyusBox title="Industry Experts" svg={expert} color="bg-red-500" />
            </div>
          </div>
        </section>
      );
    }

export default Whyus;
