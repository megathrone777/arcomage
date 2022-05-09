import React from "react"
import { connect } from "react-redux"
// import ResourcesPanel from "./ResourcesPanel/ResourcesPanel"
import PlayerStructures from "../PlayerStructures/PlayerStructures"
import { Board } from "./styled"

const Player = props => {
  return (
    <Board playerId={props.playerId} id={`playerBoard-${props.playerId}`}>
      {/* <strong>Player name: </strong>{props.player.name} */}
      <PlayerStructures
        tower={props.player.stats.tower}
        wall={props.player.stats.wall}
        playerId={props.playerId}
      />
      {/* <ResourcesPanel stats={props.player.stats} playerId={props.playerId} /> */}
      {/* <CardHolder playerId={props.playerId} stats={props.player.stats} /> */}
    </Board>
  )
}

// export default Player
export default connect(
  ({ app: { players } }, ownProps) => ({
    player: players[ownProps.playerId],
  }),
  null
)(Player)
