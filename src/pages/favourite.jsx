import MusicCard from "../components/MusicCard";
import FavStore from "../store/FavStore";

const Favourite = () => {
  const { favourites } = FavStore();
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
            playSong={() => {}}
            pauseSong={() => {}}
          />
        ))}
        </div>
      
    </>
  );
};

export default Favourite;
