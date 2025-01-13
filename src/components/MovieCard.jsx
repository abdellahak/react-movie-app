function MovieCard({ movie }) {
  function onFavoriteClick() {}

  return (
    <div className="movie-card bg-slate-800 text-white rounded-lg shadow-lg overflow-hidden m-4 transform transition-transform hover:scale-105">
      <div className="movie-poster relative">
        <img
          src={movie.url}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="movie-overlay absolute inset-0 bg-black bg-opacity-50 flex items-start justify-end opacity-0 transition-opacity hover:opacity-100 p-4">
          <button
            className="favorite-btn p-2 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none"
            onClick={onFavoriteClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="movie-info p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
