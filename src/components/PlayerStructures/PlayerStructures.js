import React from "react"
import Wall from "./Wall/Wall"
import { Structure } from "./styled"

const PlayerStructures = props => {
  return (
    <Structure className="hidden">
      <Wall
        points={props.wall}
        towerProps={props.tower}
        playerId={props.playerId}
      />
    </Structure>
  )
}

export default PlayerStructures
