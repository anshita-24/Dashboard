import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome</h2>
      <p className="text-sm opacity-80">
        This is a minimal Next.js starter showcasing an atomic structure and a sales chart demo.
      </p>
      <Link href="/dashboard" className="inline-block rounded-xl border px-4 py-2 hover:bg-gray-50">
        Go to Dashboard
      </Link>
    </div>
  );
}
