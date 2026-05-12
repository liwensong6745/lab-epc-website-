export default function ImageGallery() {
  const heading = (
    <>
      不被察觉的空间<br />正是我们建造的一切
    </>
  );
  const sub = "The space you never notice is the space we built.";

  return (
    <section>
      <div className="relative overflow-hidden">
        <img
          src="/images/横幅图.png"
          alt=""
          className="w-full h-auto block opacity-95"
          draggable={false}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginTop: "-6%" }}>
          <div className="text-center px-8">
            <p
              className="text-[#1D1D1F]/35 font-light tracking-tight leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)" }}
            >
              {heading}
            </p>
            <p
              className="text-black/35 text-sm font-light tracking-[0.2em] mt-4 max-w-sm mx-auto select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}
            >
              {sub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
