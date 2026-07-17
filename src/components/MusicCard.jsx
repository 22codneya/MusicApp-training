
function MusicCard({singleSong, playSong}){

return(
    <div style={{border:"1px grey solid", width:"160px", padding:"10px", height:"300px"}}>
      <img src={singleSong.artworkUrl100} alt="" />
        <p>{singleSong.trackName}</p>
        <p>{singleSong.artistName}</p>
        <button onClick={()=>{return playSong(singleSong.previewUrl)}}>PLAY</button>
    </div>
)

}

export default MusicCard