import HeaderNav from "@/components/header-nav";
import FeaturedMovies from "@/components/home/featured-movies";
import HeroBanner from "@/components/home/hero-banner";

// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <footer className="bg-amber-400 h-72">Footer Section</footer>
    </div>
  );
}
