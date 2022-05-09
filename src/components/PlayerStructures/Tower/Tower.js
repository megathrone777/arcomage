import React, { useEffect } from "react"
import TweenMax, { TimelineMax } from "gsap"
import { import2Object } from "../../../helpers/helpers"
import { Wrapper, Image, Stats } from "./styled"

// webpack imports all the images from the folder that comply with the regex
const assets = import2Object(
  require.context("./../../../images/tower", false, /\.(svg)$/)
)

const Tower = props => {
  let towerHeight = 0
  useEffect(() => {
    // saver the height once the first time
    if (!towerHeight) {
      towerHeight = document.querySelector(".tower").parentElement.offsetHeight
      // console.log("space height", 60vh)
    }
    // animate the wall to the points
    if (towerHeight) {
      const towerY = Math.round((towerHeight / 66) * props.points)
      TweenMax.to(`#playerBoard-${props.playerId} .tower`, 1, {
        height: towerY,
        delay: 0.3,
      })
    }
  })
  return (
    <Wrapper>
      <Image
        src={assets[`tower_${props.playerId}.svg`]}
        alt=""
        className="img-fluid tower"
        playerId={props.playerId}
      />
      <Stats playerId={props.playerId}>Tower: {props.points}</Stats>
    </Wrapper>
  )
}

export default Tower
