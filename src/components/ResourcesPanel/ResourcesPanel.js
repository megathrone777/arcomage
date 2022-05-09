import React from "react"
import Resource from "./Resource/Resource"
import { Layout } from "./styled"

const ResourcesPanel = props => {
  return (
    <Layout playerId={props.playerId} className="hidden">
      <Resource
        generator="mines"
        resource="bricks"
        stats={props.stats}
        playerId={props.playerId}
      />
      <Resource
        generator="magic"
        resource="gems"
        stats={props.stats}
        playerId={props.playerId}
      />
      <Resource
        generator="dungeons"
        resource="monsters"
        stats={props.stats}
        playerId={props.playerId}
      />
    </Layout>
  )
}

export default ResourcesPanel
