import MovieLoading from "./movie-loading";

export default async function MovieDetailsPage(props) {
  const { id } = await props.params;
  return (
    <main className="flex flex-col justify-center py-16">
      <h1 className="font-bold text-center text-xl text-purple-800">
        Movie Details Page
      </h1>
      <h2 className="text-center py-5">Movie ID: {id}</h2>

      <MovieLoading />
    </main>
  );
}
