import React from "react"
import { import2Object } from "./../../../helpers/helpers"
import { Item, Image, Points, Name } from "./styled"

const assets = import2Object(
  require.context(
    "./../../../images/player_resources",
    false,
    /\.(jpg|jpeg|png|svg)$/
  )
)

const Resource = props => {
  const playerNumber = props.playerId.indexOf("1") > 0 ? "1" : "2"
  const fileName = `resources_${props.resource}_${playerNumber}.png`
  //  props {
  // playerId: player1,
  // generator: "dungeons"
  //   resource: "monsters"
  //   stats: {
  //   bricks: 7
  //   dungeons: 1
  //   gems: 16
  //   magic: 2
  //   mines: 3
  //   monsters: 5
  //   tower: 25
  //   wall: 23}
  //  }
  return (
    <Item playerId={props.playerId}>
      <Image src={assets[fileName]} alt="Image" />
      <Points playerId={props.playerId}>
        {props.stats[props.resource]}
      </Points>

      <Points playerId={props.playerId} isGenerator>
        +{props.stats[props.generator]}
      </Points>

      <Name playerId={props.playerId}>
        {props.resource}
      </Name>
    </Item>
  )
}

export default Resource
