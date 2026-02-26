import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
      <h1 className="text-8xl font-bold font-heading text-zinc-900 tracking-tighter">404</h1>
      <p className="text-xl text-zinc-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-zinc-900 text-white rounded-md font-medium hover:bg-amber-600 transition-colors"
      >
        <Home className="size-4" />
        Return Home
      </Link>
    </div>
  );
}
