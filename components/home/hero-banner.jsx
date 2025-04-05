import { Film, Play } from "lucide-react";

export default function HeroBanner() {
  return (
    // Enhanced Hero Section with Cinematic Background
    <section className="relative overflow-hidden min-h-[70vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
      </div>
    </section>
  );
}
