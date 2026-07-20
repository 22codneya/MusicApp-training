import { useEffect, useState } from "react";
import MusicGrid from "../components/MusicGrid";
import { Link } from "react-router-dom";
import useAudioPlayer from "../store/useAudioPlayer";

function AllSongs() {
  const [songs, setSongs] = useState([]);
  const{playSong ,pauseSong}=useAudioPlayer()
  const [loading, setLoading] = useState(true);
//   const currentAudioRef = useRef(null);
  const [searchedText, setSearchedTerm] = useState("billie ellish");
  const [debouncedTerm, setDebouncedTerm] = useState(searchedText);

//   function onPlay(preview) {
//     if (currentAudioRef.current) {
//       currentAudioRef.current.pause();
//     }
//     const audio = new Audio(preview);
//     audio.play();
//     currentAudioRef.current = audio;
//   }

  useEffect(() => {
    const fetchData = async () => {
         setLoading(true);
      try {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${debouncedTerm}&limit=20&entity=song`,
        );
        const data = await response.json();
        setSongs(data.results);
      } catch (err) {
        console.log("BRUH ERROR", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [debouncedTerm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchedText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchedText]);

//   const pauseSong = () => {
//     if (currentAudioRef.current) {
//       currentAudioRef.current.pause();
//     }
//   };
  return (
    <>
      {/* //navbar */}
      <div
        class="navbar bg-base-100 shadow-sm"
        style={{ padding: "20px 20px" }}
      >
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">MusicApp</a>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/favourite">Favourite</Link>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search your song"
              onChange={(e) => {
                setSearchedTerm(e.target.value);
              }}
              value={searchedText}
            />
          </label>
        </div>
      </div>
      {/* // */}

      {loading ? (
        <h3>Loading data</h3>
      ) : (
        <MusicGrid songsArray={songs} onPlay={playSong} pauseSong={pauseSong} />
      )}
    </>
  );
}
export default AllSongs;
