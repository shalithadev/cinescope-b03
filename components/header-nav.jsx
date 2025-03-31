import Link from "next/link";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

export default function HeaderNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="text-primary text-xl font-bold">CineScope</span>
        </Link>

        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="/"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Movies
          </Link>
          <Link
            href="/genres"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Genres
          </Link>
          <Link
            href="/about"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/admin"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Admin
          </Link>

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
