import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <h2 className="text-lg text-primary font-medium">404 | Not Found!</h2>
      <p className="text-base">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
