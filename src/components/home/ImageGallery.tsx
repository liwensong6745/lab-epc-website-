export default function ImageGallery() {
  const heading = (
    <>
      不被察觉的空间<br />正是我们建造的一切
    </>
  );
  const sub = "The space you never notice is the space we built.";

  return (
    <section>
      {/* Desktop: image + text overlay */}
      <div className="hidden lg:block relative overflow-hidden">
        <img
          src="/images/横幅图.png"
          alt=""
          className="w-full h-auto block opacity-95"
          draggable={false}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-8 -translate-x-[1.5%]">
            <p
              className="text-[#1D1D1F]/35 font-light tracking-tight leading-relaxed max-w-lg mx-auto select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200, fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}
            >
              {heading}
            </p>
            <p
              className="text-black/35 text-sm font-light tracking-[0.2em] mt-4 max-w-sm mx-auto select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}
            >
              {sub}
            </p>
            <div className="w-16 h-[1.5px] rounded-full bg-[#007AFF]/15 mx-auto mt-16" />
          </div>
        </div>
      </div>

      {/* Tablet & mobile: image + text stacked on solid bg */}
      <div className="lg:hidden">
        <img
          src="/images/横幅图.png"
          alt=""
          className="w-full h-auto block opacity-95"
          draggable={false}
        />
        <div className="bg-white py-24 text-center px-8">
          <p
            className="text-[#1D1D1F]/35 text-2xl md:text-3xl font-light tracking-tight leading-relaxed max-w-sm mx-auto select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}
          >
            {heading}
          </p>
          <p
            className="text-black/35 text-sm font-light tracking-[0.2em] mt-6 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}
          >
            {sub}
          </p>
          <div className="w-16 h-[1.5px] rounded-full bg-[#007AFF]/15 mx-auto mt-12" />
        </div>
      </div>
    </section>
  );
}
