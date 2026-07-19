import MusicCard from "../components/MusicCard";

function MusicGrid({ songsArray, onPlay, pauseSong }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {songsArray.map((song) => {
        return (
          <MusicCard
            singleSong={song}
            playSong={onPlay}
            pauseSong={pauseSong}
          />
        );
      })}
    </div>
  );
}

export default MusicGrid;
