import React from 'react';

const ComplianceComparison = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Grow Your Business instead of Complex Registration processes and leave it for us
      </h2>

      <div className="text-gray-300 text-center max-w-xl mb-10">
        With other service providers you would have to pay for each compliance filing individually!
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-6xl">
        {/* Left Side - Other Services */}
        <div className="relative bg-gray-900 rounded-2xl p-6 w-full lg:w-1/2 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>INC 20A filing – Rs.1,000</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>ADT 1 filing – Rs.1,000</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>Monthly GST filings – Rs.10,000</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>Quarterly TDS filings – Rs.5,000</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>Quarterly TDS filings – Rs.5,000</span>
            </div>
          </div>

          {/* Yellow 50k bubble */}
          <div className="absolute -top-6 right-10 bg-yellow-400 text-black font-bold w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-lg">
            50k
          </div>
        </div>

        {/* Right Side - RegisterKaro */}
        <div className="bg-gray-900 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-lg">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <input type="checkbox" checked readOnly className="accent-orange-500" />
              <span>Use RegisterKaro</span>
            </div>
            <p className="text-gray-300 mt-4">
              Get all your <strong className="text-white">Compliance</strong> done with the help of{' '}
              <strong className="text-white">Industry Experts</strong> and channelize that precious time to grow your{' '}
              <strong className="text-white">business</strong>.
            </p>
          </div>

          <button className="mt-4 bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-2 rounded-full font-semibold">
            Get Started!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceComparison;
