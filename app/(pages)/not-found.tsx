import Link from "next/link";

export default async function NotFound({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">not dounf</h2>
      <p className="text-gray-600 mb-8 text-center">not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#FF9358] text-white rounded-lg hover:bg-primary-dark transition-colors"
      >
        not found
      </Link>
    </div>
  );
}
