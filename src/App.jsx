import { useEffect, useRef, useState } from "react"
import MusicGrid from "../src/components/MusicGrid"

function App(){

  const [songs,setSongs] = useState([])
  const [loading,setLoading] =useState(false)
  const currentAudioRef = useRef(null)

function onPlay(preview){
  if(currentAudioRef.current){
    currentAudioRef.current.pause()

   }
    const audio =new Audio(preview)
    audio.play()
    currentAudioRef.current = audio
}

useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response =await fetch("https://itunes.apple.com/search?term=daler+mahandi&limit=25")
      const data = await response.json()
      setSongs(data.results)
    }
    catch(err){
      console.log("BRUH ERROR", err)}
    finally{
      setLoading(false)
    }
  }
  fetchData()
},[])


  return(
    <>
     <h1>MusicApp</h1>
     {loading?<h3>Loading data</h3>:<MusicGrid songsArray={songs} onPlay={onPlay} />}
    </>
  )
}
export default App