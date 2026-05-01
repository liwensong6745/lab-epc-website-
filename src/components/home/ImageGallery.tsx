export default function ImageGallery() {
  return (
    <section className="py-32 md:py-48 bg-white px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">

        {/* Text */}
        <div className="text-center">
          <p
            className="text-[#1D1D1F]/85 text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed max-w-3xl mx-auto select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 200 }}
          >
            不被察觉的空间<br />正是我们建造的一切
          </p>
          <p className="text-black/45 text-sm font-light tracking-[0.2em] mt-6 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            The space you never notice is the space we built.
          </p>
          {/* Blueprint line */}
          <div className="w-40 h-[0.5px] bg-gradient-to-r from-transparent via-[#007AFF]/15 to-transparent mx-auto mt-16 md:mt-20" />
        </div>

      </div>
    </section>
  );
}
