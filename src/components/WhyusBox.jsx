function WhyusBox({ title, svg, color }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-[#0E0E0E] rounded-xl hover:scale-105 transition-transform duration-300">
      <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
        <img
          src={svg}
          alt={title}
          className="w-7 h-7 transition-transform duration-300 hover:rotate-12"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default WhyusBox;
