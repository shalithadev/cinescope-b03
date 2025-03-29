import HeaderNav from "@/components/header-nav"; // alias import

// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="bg-primary h-screen">Main Section</main>
      <footer className="bg-amber-400 h-72">Footer Section</footer>
    </div>
  );
}
