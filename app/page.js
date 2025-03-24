// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-1 bg-gray-400">
        Header Section
      </header>
      <main className="flex-1 bg-primary">
        Main Section
      </main>
      <footer className="flex-1 bg-amber-400">
        Footer Section
      </footer>
    </div>
  );
}
