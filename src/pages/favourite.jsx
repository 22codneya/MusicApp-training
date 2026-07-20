import MusicCard from "../components/MusicCard";
import FavStore from "../store/FavStore";
import useAudioPlayer from "../store/useAudioPlayer";

const Favourite = () => {
  const { favourites } = FavStore();
    const{playSong ,pauseSong}=useAudioPlayer()

  console.log("favourites yeh rhe", favourites);
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm"  style={{padding:"20px 20px", marginBottom:"10px"}}>
        <a className="btn btn-ghost text-xl">Favourites:</a>
        </div>
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        {favourites.map((fav) => (
          <MusicCard
            singleSong={fav}
            playSong={playSong}
            pauseSong={pauseSong}
          />
        ))}
        </div>
      
    </>
  );
};

export default Favourite;
