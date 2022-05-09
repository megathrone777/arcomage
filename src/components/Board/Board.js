import React, { useState, useEffect } from "react"
import { connect, useSelector } from "react-redux"
import TweenMax, { TimelineMax } from "gsap"

import { music } from "@constants/audio"

import Music from "../Music"
import Player from "../Player/Player"
import CardHolder from "../CardHolder/CardHolder"
import BackgroundScene from "../Background/BackgroundScene/BackgroundScene"

import ResourcesPanel from "../ResourcesPanel/ResourcesPanel"
// import PlayerStructures from "./PlayerStructures/PlayerStructures"
import { Resources } from "./styled"
import { Filter } from "../Background/BackgroundScene/styled"
import Intro from "../Intro/Intro"

const tl = new TimelineMax({ paused: true })

const Board = props => {
  // TO DO:
  // 1. how we can know names of players. at this moment there are static
  // 2. who of players is enemy, who is me?
  const player1Turn = useSelector(state => state.app.players["player1"].canPlay)
  const player2Turn = useSelector(state => state.app.players["player2"].canPlay)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(true)
  const elements =
    typeof document !== "undefined"
      ? document.getElementsByClassName("hidden")
      : null

  useEffect(() => {
    tl.set("#introContent", {
      width: 0,
      rotation: 0.01,
    })

    tl.to("#introContent", 0.7, {
      width: 650,
      rotation: 0.01,
      opacity: 1,
      ease: "ease-out",
      onComplete: () => {
        TweenMax.to("#logoWrapper", 0.5, { opacity: 1, visibility: "visible" })
      },
    })

    if (!isGameStarted) {
      TweenMax.to("#intro", 0.1, {
        opacity: 1,
        visibility: "visible",
        onComplete: () => {
          tl.play()
        },
      })
    }
  }, [isGameStarted])

  useEffect(() => {
    tl.eventCallback("onReverseComplete", () => {
      while (elements[0]) {
        elements[0].classList.remove("hidden")
      }

      TweenMax.to("#intro", 0, { display: "none" })
      TweenMax.to("#backgroundScene", 1, { height: "65vh" })
      TweenMax.to("#playerBoard-player1", 2, { left: "0" })
      TweenMax.to("#playerBoard-player2", 2, { right: "0" })
      TweenMax.to("#tower", 4, { bottom: "+=6vh" })
      setIsGameStarted(true)
    })
  }, [])

  const handleStart = () => {
    tl.reverse(0)
  }

  const handleRules = () => {
    TweenMax.to("#introContent", 0.4, {
      width: 100,
      rotation: 0.01,
      onComplete: () => {
        TweenMax.to("#introLayout, #logoWrapper, #introHelper", 0, {
          display: "none",
        })
        TweenMax.to("#rules, #rulesClose", 0, { display: "block" })
        TweenMax.to("#introContent", 0.4, {
          width: 650,
          rotation: 0.01,
          opacity: 1,
          ease: "ease-out",
        })
      },
    })
  }

  const closeRules = () => {
    TweenMax.to("#introContent", 0.4, {
      width: 100,
      rotation: 0.01,
      onComplete: () => {
        TweenMax.to("#introLayout, #logoWrapper, #introHelper", 0, {
          display: "block",
        })
        TweenMax.to("#rules, #rulesClose", 0, { display: "none" })
        TweenMax.to("#introContent", 0.4, {
          width: 650,
          rotation: 0.01,
          delay: 0.1,
          opacity: 1,
          ease: "ease-out",
        })
      },
    })
  }

  return (
    <div>
      <BackgroundScene />
      <Intro
        startGame={() => handleStart()}
        openRules={() => handleRules()}
        closeRules={() => closeRules()}
      />

      <div>
        {/* <strong>Player name: </strong>{props.player.name} */}
        <Player playerId="player1" />
        <Player playerId="player2" />
      </div>

      <Filter isOrange />

      <Resources>
        <ResourcesPanel
          stats={props.players["player1"].stats}
          playerId="player1"
        />
        <ResourcesPanel
          stats={props.players["player2"].stats}
          playerId="player2"
        />
      </Resources>

      {isGameStarted && (
        <>
          <CardHolder
            playerId="player1"
            canPlay={player1Turn}
            isEnemy={false}
          />
          <CardHolder playerId="player2" canPlay={player2Turn} isEnemy={true} />
        </>
      )}

      <Music
        url={isGameStarted ? music.Game : music.Intro}
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
      />
    </div>
  )
}

// export default Board;
export default connect(
  ({ app: { players } }) => ({ players }),
  null
)(Board)
