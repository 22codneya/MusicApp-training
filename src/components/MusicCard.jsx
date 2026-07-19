import FavStore from "../store/FavStore";

function MusicCard({ singleSong, playSong, pauseSong }) {
  const { addFavourite, removeFavourite, favourites } = FavStore();
  const isFav = favourites.some((fav) => fav.trackId === singleSong.trackId);

  return (
    <div>
      <div
        className="card bg-base-100 w-96 shadow-sm card-md"
        style={{ width: "300px", height: "350px" }}
      >
        <figure className="px-10 pt-10">
          <img src={singleSong.artworkUrl100} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singleSong.trackName}</h2>
          <p>{singleSong.artistName}</p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="card-actions justify-start">
              <button
                onClick={() => {
                  isFav
                    ? removeFavourite(singleSong.trackId)
                    : addFavourite(singleSong);
                }}
              >
                {isFav ? "👎" : "❤️"}
              </button>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-soft"
                onClick={() => {
                  return playSong(singleSong.previewUrl);
                }}
              >
                Play
              </button>
              <button
                className="btn btn-soft"
                onClick={() => {
                  pauseSong();
                }}
              >
                Pause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
