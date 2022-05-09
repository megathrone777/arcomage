import React from "react"
import Sound from "react-sound"

const Music = ({ url, musicPlaying, setMusicPlaying }) => (
  <Sound
    url={url}
    autoLoad={true}
    ignoreMobileRestrictions={true}
    loop={true}
    onLoad={() => setMusicPlaying(true)}
    playStatus={musicPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
  />
)

export default Music
