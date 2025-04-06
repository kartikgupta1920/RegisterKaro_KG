import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ContactUs = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-orange-500">Contact</span> Us
      </h2>

      <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {/* LEFT SIDE - Contact Info */}
        <div className="space-y-8">
          <ContactItem
            icon={<MapPinIcon className="h-6 w-6 text-orange-500" />}
            title="Main Office"
            content="Safe Ledger Private Limited
#101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008"
          />
          <ContactItem
            icon={<PhoneIcon className="h-6 w-6 text-orange-500" />}
            title="Make a Call"
            content="Phone: +91 84477 46183"
          />
          <ContactItem
            icon={<ClockIcon className="h-6 w-6 text-orange-500" />}
            title="Working Hours"
            content={`Monday–Friday: 9:00 - 06:00\nSaturday–Sunday: Holiday`}
          />
          <ContactItem
            icon={<EnvelopeIcon className="h-6 w-6 text-orange-500" />}
            title="Send an Email"
            content={`support@registerkaro.in\nadmin@registerkaro.in`}
          />
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+91 00000 00000"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 bg-orange-500/20 rounded-full">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-300 whitespace-pre-line text-sm">{content}</p>
    </div>
  </div>
);

export default ContactUs;
