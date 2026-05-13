export default function ImageGallery() {
  return (
    <section>
      <div className="relative overflow-hidden">
        <img
          src="/images/横幅图.png"
          alt="不被察觉的空间正是我们建造的一切"
          className="w-full h-auto block opacity-95"
          draggable={false}
        />
      </div>
    </section>
  );
}
