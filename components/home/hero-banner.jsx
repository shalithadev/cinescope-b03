// Hero Banner Section
export default function HeroBanner() {
  return (
    <section id="overview" className="relative overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 z-0">
        <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
      </div>

      <div className="container relative z-20 px-4 py-32">
        <h1 className="text-white text-6xl font-bold text-center py-20">
          Hero Title Here
        </h1>
        <p className="text-white text-center text-xl">
          Sample Description Here...
        </p>
      </div>
    </section>
  );
}
