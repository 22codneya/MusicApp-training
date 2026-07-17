import MusicCard from "../components/MusicCard"

function MusicGrid({songsArray, onPlay}){

    return(
        <div style={{display:"flex", flexWrap:"wrap",padding:"10px" , justifyContent:"center" , alignItems:"center", gap:"20px" }}>
         {songsArray.map((song)=>{
           return  <MusicCard singleSong={song} playSong={onPlay}/>
         })

         }
        </div>
    )

}
 
export default MusicGrid