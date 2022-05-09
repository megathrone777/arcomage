import React, { useEffect } from "react"
import Tower from "../Tower/Tower"
import TweenMax, { TimelineMax } from "gsap"
import { import2Object } from "../../../helpers/helpers"
import { Wrapper, Item, Stats } from "./styled"

const assets = import2Object(
  require.context("./../../../images/wall", false, /\.(png)$/)
)

const Wall = props => {
  let wallHeight = 0
  useEffect(() => {
    // saver the height once the first time
    if (!wallHeight) {
      wallHeight = document.querySelector(".wall").offsetHeight
    }
    // animate the wall to the points
    if (wallHeight) {
      const wallY = Math.round((wallHeight / 40) * props.points)
      TweenMax.to(`#playerBoard-${props.playerId} .wall`, 1, {
        y: wallHeight - wallY,
        delay: 0.3,
      })
    }
  })
  return (
    <Wrapper playerId={props.playerId}>
      <Item direction="back" className="wall">
        <img
          src={assets[`wall_back_${props.playerId}.png`]}
          alt=""
          className="img-fluid"
        />
      </Item>

      <Tower points={props.towerProps} playerId={props.playerId} />

      <Item direction="front" className="wall">
        <img
          src={assets[`wall_front_${props.playerId}.png`]}
          alt=""
          className="img-fluid"
        />
      </Item>

      <Stats playerId={props.playerId}>Wall: {props.points}</Stats>
    </Wrapper>
  )
}

export default Wall
