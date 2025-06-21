export default function MovieDetailsLoading() {
  // Render fallback UI
  return (
    <div className="flex flex-col items-center justify-center py-8 min-h-[60vh]">
      <div className="animate-spin rounded-full border-4 border-gray-200 border-t-blue-500 w-12 h-12 mb-4"></div>
      <div className="text-lg text-gray-600">Loading movie details...</div>
    </div>
  );
}
